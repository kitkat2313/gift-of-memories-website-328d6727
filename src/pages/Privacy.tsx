const Privacy = () => {
  return (
    <div className="min-h-screen pt-24">
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="space-y-6 text-muted-foreground">
            <p className="text-sm">Last updated: {new Date().toLocaleDateString()}</p>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us when you book our photography services, 
                including your name, email address, phone number, and event details.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">2. How We Use Your Information</h2>
              <p className="mb-2">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide and improve our photography services</li>
                <li>Communicate with you about your bookings and events</li>
                <li>Send you promotional materials (with your consent)</li>
                <li>Respond to your questions and feedback</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">3. Information Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share 
                information with trusted service providers who assist us in operating our business, subject 
                to confidentiality agreements.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">4. Photography and Image Rights</h2>
              <p>
                By hiring our services, you grant us the right to use photographs for portfolio, marketing, 
                and promotional purposes unless otherwise agreed in writing. We respect your privacy and will 
                not share personal event photos publicly without your explicit consent.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">5. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information. However, 
                no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">6. Your Rights</h2>
              <p className="mb-2">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Access your personal information</li>
                <li>Request correction of your information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">7. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:{' '}
                <a href="mailto:thegiftofmemories.clicks@gmail.com" className="text-primary hover:underline">
                  thegiftofmemories.clicks@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
