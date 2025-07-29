"use client"
import Header from "@/components/header"

export default function PrivacyPolicy() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header alwaysSolid />

      {/* Privacy Policy Content */}
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-navy-blue font-serif">
              Privacy Policy
            </h1>

            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 space-y-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We understand the importance of protecting your personal information. This Privacy Policy describes how we collect, use, and disclose your personal information when you use our website. By using our website, you consent to the collection and use of your personal information as described in this Privacy Policy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-navy-blue font-serif">Collection of Personal Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When you visit our website, we may collect certain personal information from you, including your name, email address, phone number, and other contact information. We may also collect other information about your usage of our website, such as your IP address, browser type, and operating system.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You consent to our communicating with you about Christen Montero for Riverside City Council 2026 via SMS, text message, email or other electronic means. Your carrier's normal messaging, data and other rates and fees will apply to these communications.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  If you subscribe to any text programs that Christen Montero for Riverside City Council 2026 makes available, the following terms apply:
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>By subscribing to Christen Montero for Riverside City Council 2026 updates or alerts, you consent to receive periodic updates or alerts by automatic text message. Text STOP to stop. For Help, text HELP or contact us via email. Message and data rates may apply.</li>
                  <li>You acknowledge and agree that you may opt-out of receiving further mobile messages via any opt-out keywords that are universally recognized, including, but not limited to, STOP, UNSUBSCRIBE, or QUIT.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-navy-blue font-serif">Use of Personal Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may use your personal information to:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Provide and improve our website and services</li>
                  <li>Respond to your inquiries and requests</li>
                  <li>Communicate with you about our services, promotions, and events</li>
                  <li>Analyze and monitor usage of our website</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-navy-blue font-serif">Disclosure of Personal Information</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may disclose your personal information to third-party service providers who assist us in providing our services, such as hosting providers, payment processors, and analytics providers. We may also disclose your personal information if required by law or to protect our legal rights.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-navy-blue font-serif">Cookies and Other Tracking Technologies</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may use cookies and other tracking technologies to collect information about your usage of our website and to personalize your experience. You can choose to accept or decline cookies. If you decline cookies, some features of our website may not be available to you.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-navy-blue font-serif">Security of Personal Information</h2>
                <p className="text-gray-700 leading-relaxed">
                  We take reasonable measures to protect your personal information from unauthorized access, disclosure, and use. However, no security measures are perfect, and we cannot guarantee the security of your personal information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-navy-blue font-serif">Children's Privacy</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under the age of 13. If we become aware that we have collected personal information from a child under the age of 13, we will take steps to delete the information as soon as possible.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-navy-blue font-serif">Changes to this Privacy Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy from time to time by posting a new version on our website. We encourage you to review this Privacy Policy periodically.
                </p>
              </div>

              <div className="pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 