import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Manage Accounts Receivable and Avoid Late Payers',
  description: 'Improve cash flow with credit checks, payment terms, invoicing systems, and collections processes. Reduce bad debt and speed up customer payments.',
};

export default function HowToManageAccountsReceivableAndAvoidLatePayers(): React.ReactElement {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
        <a href="/category/how-to" className="hover:text-pink-600">How-To Guides</a>
        <span>/</span>
        <span className="text-gray-900">Manage Accounts Receivable</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 bg-pink-600 rounded-lg flex items-center justify-center text-white mr-3">
            💰
          </div>
          <span className="text-pink-600 font-medium">Business & Startup Finance</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          How to Manage Accounts Receivable and Avoid Late Payers
        </h1>
        <p className="text-xl text-gray-600">
          Improve cash flow with credit checks, payment terms, invoicing systems, and collections processes. Reduce bad debt and speed up customer payments.
        </p>
      </div>

      <article className="prose prose-lg max-w-none">
        <div className="bg-pink-50 border-l-4 border-pink-600 p-6 mb-8">
          <h3 className="text-lg font-semibold text-pink-800 mb-2">💳 Receivables Management Strategy</h3>
          <p className="text-pink-700">
            Screen customers before extending credit, set clear payment terms, send invoices immediately, follow up systematically on overdue accounts, and use automation tools to streamline the entire process.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold mb-4">Poor Receivables Management Kills Cash Flow</h3>
          <p className="mb-4">
            Late payments and bad debt can destroy profitable businesses by creating cash flow crises. Every day money stays unpaid costs you interest, opportunity, and operational flexibility. Professional receivables management systems reduce payment delays, minimize bad debt, and improve cash flow predictability.
          </p>
          <p>
            This guide shows you how to establish credit policies, create efficient invoicing systems, implement collection procedures, and use technology to manage receivables professionally.
          </p>
        </div>

        <h2>Establish Credit Policies and Customer Screening</h2>
        <p>Prevent payment problems by qualifying customers before extending credit terms.</p>

        <h3>Customer Credit Application Process</h3>
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-3">Required Information</h4>
            <ul className="text-green-700 space-y-2">
              <li>• Legal business name and DBA</li>
              <li>• Business address and phone</li>
              <li>• Federal tax ID (EIN)</li>
              <li>• Years in business</li>
              <li>• Bank references (2-3 accounts)</li>
              <li>• Trade references (3-5 suppliers)</li>
              <li>• Personal guarantee from owners</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-3">Credit Verification Steps</h4>
            <ul className="text-blue-700 space-y-2">
              <li>• Check business credit reports (D&B, Experian)</li>
              <li>• Verify business registration and licenses</li>
              <li>• Contact bank references</li>
              <li>• Call trade references for payment history</li>
              <li>• Review financial statements if available</li>
              <li>• Search for liens and judgments</li>
              <li>• Set appropriate credit limits</li>
            </ul>
          </div>
        </div>

        <h2>Professional Invoicing Systems</h2>
        <p>Efficient invoicing accelerates payment and reduces disputes.</p>

        <div className="bg-pink-50 border-l-4 border-pink-500 p-6 my-8">
          <h3 className="font-semibold mb-2">📋 Professional Invoice Checklist</h3>
          <ul className="mt-2 space-y-1">
            <li>☐ Send invoices immediately upon delivery</li>
            <li>☐ Use consistent invoice numbering system</li>
            <li>☐ Include clear payment terms and due dates</li>
            <li>☐ Provide detailed description of goods/services</li>
            <li>☐ Show quantities, rates, and extended amounts</li>
            <li>☐ Include your business contact information</li>
            <li>☐ Add customer purchase order numbers</li>
            <li>☐ Offer multiple payment methods</li>
            <li>☐ Include remittance address and instructions</li>
            <li>☐ Professional branding and formatting</li>
          </ul>
        </div>

        <h2>Key Takeaways</h2>
        <ul>
          <li><strong>Screen customers:</strong> Use credit applications and verify references before extending terms</li>
          <li><strong>Clear payment terms:</strong> Set reasonable terms and communicate them clearly</li>
          <li><strong>Professional invoicing:</strong> Send detailed, accurate invoices immediately</li>
          <li><strong>Systematic follow-up:</strong> Use consistent collection procedures</li>
          <li><strong>Use technology:</strong> Automate processes to reduce administrative burden</li>
          <li><strong>Monitor performance:</strong> Track key metrics to identify and address problems</li>
        </ul>
      </article>

      <div className="mt-12 border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/how-to/how-to-manage-cash-flow-for-seasonal-businesses" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Manage Seasonal Cash Flow</h3>
            <p className="text-pink-600 text-sm mt-2">Receivables management affects cash flow</p>
          </Link>
          <Link href="/how-to/how-to-choose-accounting-software-for-your-business" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Choose Accounting Software</h3>
            <p className="text-pink-600 text-sm mt-2">Software streamlines receivables management</p>
          </Link>
        </div>
      </div>
    </div>
  );
}