const Terms = () => {
  return (
    <div className="min-h-screen pt-24">
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms & Conditions</h1>
          
          <div className="space-y-6 text-muted-foreground">
            <p className="text-sm">Last updated: {new Date().toLocaleDateString()}</p>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">1. Booking and Payment</h2>
              <p>
                A booking is confirmed only after receipt of the signed contract and required deposit. 
                Full payment must be completed before or on the event date. Cancellations made less than 
                30 days before the event may result in forfeiture of the deposit.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">2. Photography Coverage</h2>
              <p>
                We will make every effort to capture all important moments. However, we cannot be held 
                responsible for missed shots due to unforeseen circumstances, poor weather, inadequate 
                lighting, or obstructions beyond our control.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">3. Delivery Timeline</h2>
              <p>
                Edited photos will be delivered within 4-8 weeks from the event date. Rush processing 
                may be available for an additional fee. Videos typically take 8-12 weeks for complete editing.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">4. Copyright and Usage</h2>
              <p>
                All photographs and videos remain the copyright of Gift of Memories. Clients receive 
                personal usage rights but may not use images for commercial purposes without written permission. 
                We retain the right to use images for marketing and portfolio purposes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">5. Equipment Failure</h2>
              <p>
                We use backup equipment and have contingency plans. However, in the unlikely event of 
                complete equipment failure or illness, our liability is limited to a full refund of fees paid.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">6. Client Responsibilities</h2>
              <p className="mb-2">Clients agree to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide accurate event details and timeline</li>
                <li>Ensure venue permits photography and necessary permissions</li>
                <li>Provide meals and breaks for photographers during extended coverage</li>
                <li>Ensure safe working conditions for our team</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">7. Image Selection and Editing</h2>
              <p>
                We select and edit images based on our professional judgment. Minor retouching is included 
                in all packages. Extensive retouching requests may incur additional charges.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">8. Force Majeure</h2>
              <p>
                We are not liable for failure to perform services due to circumstances beyond our control, 
                including natural disasters, government restrictions, or health emergencies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">9. Disputes</h2>
              <p>
                Any disputes will be resolved through negotiation. If necessary, disputes will be subject 
                to the jurisdiction of courts in Kolkata, West Bengal, India.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">10. Contact Information</h2>
              <p>
                For questions regarding these terms, please contact us at:{' '}
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

export default Terms;
