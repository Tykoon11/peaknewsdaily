#!/bin/bash

# Setup cron job for crypto data refresh (every 15 minutes)
# Since crypto markets run 24/7, we need frequent updates

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
CRYPTO_SCRIPT="$SCRIPT_DIR/crypto-refresh.js"

echo "🚀 Setting up crypto refresh cron job..."
echo "Project directory: $PROJECT_DIR"
echo "Crypto script: $CRYPTO_SCRIPT"

# Check if script exists and is executable
if [[ ! -f "$CRYPTO_SCRIPT" ]]; then
    echo "❌ Crypto refresh script not found at $CRYPTO_SCRIPT"
    exit 1
fi

if [[ ! -x "$CRYPTO_SCRIPT" ]]; then
    echo "🔧 Making crypto script executable..."
    chmod +x "$CRYPTO_SCRIPT"
fi

# Create a wrapper script that sets the correct working directory
WRAPPER_SCRIPT="$SCRIPT_DIR/crypto-cron-wrapper.sh"
cat > "$WRAPPER_SCRIPT" << EOF
#!/bin/bash
cd "$PROJECT_DIR"
node "$CRYPTO_SCRIPT" >> "$PROJECT_DIR/logs/crypto-refresh.log" 2>&1
EOF

chmod +x "$WRAPPER_SCRIPT"

# Create logs directory if it doesn't exist
mkdir -p "$PROJECT_DIR/logs"

# Add cron job (runs every 15 minutes)
CRON_JOB="*/15 * * * * $WRAPPER_SCRIPT"

# Check if cron job already exists
if crontab -l 2>/dev/null | grep -q "$CRYPTO_SCRIPT\|crypto-refresh\|crypto-cron-wrapper"; then
    echo "⚠️ Crypto cron job already exists, removing old version..."
    crontab -l 2>/dev/null | grep -v "$CRYPTO_SCRIPT\|crypto-refresh\|crypto-cron-wrapper" | crontab -
fi

# Add new cron job
(crontab -l 2>/dev/null; echo "$CRON_JOB") | crontab -

echo "✅ Crypto refresh cron job added successfully!"
echo "📋 Cron job: $CRON_JOB"
echo "📄 Logs will be saved to: $PROJECT_DIR/logs/crypto-refresh.log"
echo ""
echo "To verify the cron job was added:"
echo "crontab -l | grep crypto"
echo ""
echo "To remove the cron job:"
echo "crontab -l | grep -v crypto-cron-wrapper | crontab -"
echo ""
echo "🪙 Crypto markets run 24/7, so this will update every 15 minutes continuously"

# Test run
echo "🧪 Running test execution..."
"$WRAPPER_SCRIPT"
echo "✅ Test completed - check logs/crypto-refresh.log for output"