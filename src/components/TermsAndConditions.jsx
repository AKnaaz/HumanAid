import React from 'react';
import { Helmet } from 'react-helmet';

const TermsAndConditions = () => {
  return (
    <div className="p-8 rounded-md shadow-md my-10">
      <Helmet>
        <title>My Eleventh Assignment | Terms and Conditions</title>
      </Helmet>
        <h1 className="text-xl md:text-2xl font-bold mb-6 text-center text-[#0FA4Af]">Terms and Conditions</h1>

        <p className="mb-4">
            Welcome to HumanAid! By using our platform, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
        </p>

      <h2 className="text-xl font-semibold mt-6 mb-3">1. Use of Platform</h2>
      <p className="mb-4">
        The platform is provided for connecting volunteers with organizations or individuals in need of volunteer assistance. You agree to use the platform only for lawful purposes and in accordance with these Terms.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-3">2. User Responsibilities</h2>
      <p className="mb-4">
        Users are responsible for the accuracy and truthfulness of the information they provide when creating posts or sending requests. You agree not to submit fraudulent, misleading, or harmful content.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-3">3. Volunteer Posts</h2>
      <p className="mb-4">
        Organizations or individuals posting volunteer needs must ensure their posts comply with all applicable laws and regulations. HumanAid is not responsible for verifying the legitimacy of any volunteer post or request.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-3">4. Privacy</h2>
      <p className="mb-4">
        We respect your privacy and handle your personal information in accordance with our Privacy Policy.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-3">5. Limitation of Liability</h2>
      <p className="mb-4">
        HumanAid is a platform facilitator and does not guarantee the outcome or safety of any volunteer engagement. Users participate at their own risk.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-3">6. Changes to Terms</h2>
      <p className="mb-4">
        We reserve the right to modify these Terms and Conditions at any time. Your continued use of the platform after changes indicates your acceptance of the updated terms.
      </p>
    </div>
  );
};

export default TermsAndConditions;
