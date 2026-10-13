const paragraph = (text) => ({ type: 'paragraph', text });
const list = (...items) => ({ type: 'list', items });
const email = (address) => ({ type: 'email', address });

export const policyPages = {
  '/privacy-policy': {
    title: 'Privacy Policy',
    intro: 'How Aadishala handles information across its School Management Software and payment services.',
    sections: [
      {
        heading: '1. Introduction',
        blocks: [
          paragraph('Aadishala (\u201cwe,\u201d \u201cour,\u201d or \u201cus\u201d) provides School Management Software and related technology services to schools, societies, universities, and other educational institutions (\u201cInstitutions\u201d).'),
          paragraph('Our software may enable students and parents to access institutional information, view fee details, submit online payments, and use other educational facilities made available by their respective Institutions.'),
          paragraph('This Privacy Policy explains how personal information is collected, used, processed, stored, and protected when users access our website or software.'),
        ],
      },
      {
        heading: '2. Information We May Collect',
        blocks: [
          paragraph('Depending on the features used, we may process:'),
          list(
            'Student and parent names and contact details.',
            'Student registration, admission, enrollment, and academic records.',
            'Fee details, payment amounts, transaction references, payment dates, and payment status.',
            'Login, device, browser, IP address, and technical information.',
            'Information submitted through enquiries, support requests, or communications.',
          ),
          paragraph('The specific information collected depends on the software features enabled by the relevant Institution.'),
        ],
      },
      {
        heading: '3. Purpose of Information Processing',
        blocks: [
          paragraph('Information may be processed to:'),
          list(
            'Provide and maintain School Management Software.',
            'Support student registration, admission, and academic administration.',
            'Display applicable admission, tuition, examination, and other institutional fees.',
            'Facilitate online payments through an authorized payment gateway.',
            'Update payment status and support transaction reconciliation.',
            'Generate receipts, reports, and administrative records.',
            'Respond to support requests and investigate transaction discrepancies.',
            'Maintain system security, prevent misuse, and comply with applicable legal requirements.',
          ),
        ],
      },
      {
        heading: '4. Role of Educational Institutions',
        blocks: [
          paragraph('The school, society, university, or other Institution using our software determines its fee structure, admission requirements, academic services, and applicable student policies.'),
          paragraph('Depending on the contractual arrangement and applicable law, the Institution may act as the party responsible for determining the purposes of processing student information. We may process information on its behalf to provide the contracted software services.'),
          paragraph('The relevant Institution remains responsible for ensuring that its student-facing information and instructions are accurate.'),
        ],
      },
      {
        heading: '5. Online Payments',
        blocks: [
          paragraph('Our software may integrate with Cashfree Payments or another authorized payment service provider to facilitate online payments.'),
          paragraph('Payment-related information may include the transaction reference, amount, payment status, date, and other details returned by the payment provider.'),
          paragraph('Payment processing is subject to the applicable payment provider\u2019s terms and procedures. We do not intend to store complete card credentials, CVV numbers, or confidential banking authentication credentials on our systems.'),
          paragraph('A payment will be reflected in the software according to the available payment confirmation and reconciliation process.'),
        ],
      },
      {
        heading: '6. Sharing of Information',
        blocks: [
          paragraph('Information may be shared, where necessary and legally permitted, with:'),
          list(
            'The relevant school, society, university, or Institution.',
            'Authorized payment gateways and financial service providers.',
            'Hosting, technology, security, and communication service providers.',
            'Authorized personnel who require access to perform their responsibilities.',
            'Government authorities or other authorized parties where disclosure is required by law.',
          ),
          paragraph('Information will be shared only for relevant operational, contractual, security, or legally permitted purposes.'),
        ],
      },
      {
        heading: '7. Data Security',
        blocks: [
          paragraph('We implement reasonable technical and organizational measures designed to protect information against unauthorized access, disclosure, alteration, loss, or misuse.'),
          paragraph('Access to student and payment-related records should be restricted according to authorized user roles and operational requirements.'),
          paragraph('No electronic system or transmission method can be guaranteed to be completely secure.'),
        ],
      },
      {
        heading: '8. Data Retention',
        blocks: [
          paragraph('Information may be retained for as long as necessary to provide software services, maintain institutional records, reconcile payments, resolve disputes, and comply with applicable legal or contractual requirements.'),
          paragraph('Retention and deletion will be handled according to the applicable service arrangement and legal obligations.'),
        ],
      },
      {
        heading: '9. Cookies and Technical Information',
        blocks: [
          paragraph('Our website or software may use cookies and similar technologies where necessary for functionality, security, analytics, and user experience.'),
          paragraph('Users may manage cookies through their browser settings, although disabling certain cookies may affect website functionality.'),
        ],
      },
      {
        heading: '10. Student and Children\u2019s Information',
        blocks: [
          paragraph('Where the software is used by minors, personal information must be handled in accordance with applicable requirements relating to children\u2019s data, parental or guardian involvement, and educational records.'),
          paragraph('The relevant Institution and our company will follow their respective responsibilities under applicable law and contractual arrangements.'),
        ],
      },
      {
        heading: '11. User Requests',
        blocks: [
          paragraph('Requests concerning student records, corrections, access, or deletion may be directed to the relevant Institution or through the applicable support process.'),
          paragraph('We may verify the identity and authority of the requester before processing a request. Certain records may need to be retained where required by law.'),
        ],
      },
      {
        heading: '12. Third-Party Services',
        blocks: [
          paragraph('The software may contain integrations or links to third-party services. Such services may be governed by their own terms and privacy policies.'),
        ],
      },
      {
        heading: '13. Policy Updates',
        blocks: [
          paragraph('We may update this Privacy Policy to reflect changes in our software, business operations, or applicable requirements. The updated policy will be published on our website.'),
        ],
      },
      { heading: '14. Contact Us', blocks: [email('info@aadishala.com')] },
    ],
  },

  '/terms-and-conditions': {
    title: 'Terms & Conditions',
    intro: 'The terms governing Aadishala, participating institutions, and authorized software users.',
    sections: [
      {
        heading: '1. Introduction',
        blocks: [
          paragraph('These Terms & Conditions govern the use of the School Management Software and related technology services provided by Aadishala (\u201cwe,\u201d \u201cour,\u201d or \u201cus\u201d).'),
          paragraph('Our software is intended for use by schools, societies, universities, and other educational institutions (\u201cInstitutions\u201d) for managing educational administration, student records, fee information, online fee payments, and related activities.'),
          paragraph('Students, parents, guardians, Institution personnel, and other authorized users must use the software in accordance with these terms and the applicable policies of their Institution.'),
        ],
      },
      {
        heading: '2. Nature of Services',
        blocks: [
          paragraph('We provide software and technology facilities that may include:'),
          list(
            'Student registration and admission management.',
            'Student and academic record management.',
            'Admission, tuition, examination, and other fee management.',
            'Online payment gateway integration.',
            'Payment status updates and transaction reconciliation.',
            'Receipts, reports, and administrative facilities.',
            'Other features enabled under the applicable service arrangement.',
          ),
          paragraph('The features available may vary according to the Institution\u2019s subscription, configuration, and agreed requirements.'),
        ],
      },
      {
        heading: '3. Role of Institutions',
        blocks: [
          paragraph('Each Institution is responsible for the educational services it provides and for the accuracy of information published through the software.'),
          paragraph('This includes course and admission information, student eligibility, fee amounts, due dates, examination fees, academic rules, and applicable refund or cancellation conditions.'),
          paragraph('Institutions must ensure that students or parents can review the relevant fee information and applicable conditions before making a payment.'),
        ],
      },
      {
        heading: '4. Student Registration and Access',
        blocks: [
          paragraph('Users must provide accurate information when using the software.'),
          paragraph('Login credentials must be kept confidential and must not be shared with unauthorized persons.'),
          paragraph('Users must promptly report suspected unauthorized access, incorrect student records, or other security concerns through the applicable support process.'),
        ],
      },
      {
        heading: '5. Fees and Online Payments',
        blocks: [
          paragraph('The software may allow students or parents to pay institutional fees, including admission fees, tuition fees, examination fees, and other charges communicated by the relevant Institution.'),
          paragraph('Before payment, the applicable payment page should identify the Institution, the relevant fee or purpose, the amount payable, and any applicable additional charges.'),
          paragraph('Online payments may be processed through Cashfree Payments or another payment provider authorized for the relevant arrangement.'),
          paragraph('Payments are subject to the applicable payment provider\u2019s processing and confirmation procedures.'),
        ],
      },
      {
        heading: '6. Payment Confirmation and Reconciliation',
        blocks: [
          paragraph('A payment may initially display as pending while confirmation is awaited.'),
          paragraph('If an amount has been debited but the software does not display a successful payment status, the user should retain the transaction reference and request verification through the relevant support channel.'),
          paragraph('The Institution and authorized service providers will review available transaction records and payment-provider responses to resolve discrepancies.'),
          paragraph('Users should avoid making a duplicate payment while the original transaction is being checked, where reasonably possible.'),
        ],
      },
      {
        heading: '7. Refunds and Cancellations',
        blocks: [
          paragraph('Refunds and cancellations relating to institutional fees will be governed by the applicable Institution\u2019s disclosed policies, the relevant payment arrangement, and applicable law.'),
          paragraph('Requests will be assessed according to the type of fee, the reason for the request, the relevant Institution\u2019s rules, the status of the service, and any applicable legal requirements.'),
          paragraph('Our software provides technology facilities and does not independently determine a student\u2019s academic or admission eligibility.'),
        ],
      },
      {
        heading: '8. Responsibilities of the Software Provider and Institution',
        blocks: [
          paragraph('The responsibilities of our company and the Institution will be governed by their applicable service agreement and mutually agreed terms, subject to applicable law.'),
          paragraph('The Institution is responsible for its educational services, fee structure, admission decisions, and institutional rules.'),
          paragraph('Our company is responsible for providing the software services agreed under the applicable service arrangement.'),
          paragraph('Payment collection, settlement, refund authorization, and related financial responsibilities will follow the approved payment setup and applicable agreements.'),
        ],
      },
      {
        heading: '9. Acceptable Use',
        blocks: [
          paragraph('Users must not:'),
          list(
            'Submit false or misleading information.',
            'Attempt unauthorized access to student, financial, or administrative records.',
            'Interfere with the security or operation of the software.',
            'Misuse payment facilities or transaction information.',
            'Copy, distribute, or commercially exploit software content without authorization.',
            'Use the software for unlawful purposes.',
          ),
        ],
      },
      {
        heading: '10. Intellectual Property',
        blocks: [
          paragraph('The software, its source code, design, interface, and associated technology remain the property of their respective lawful owners.'),
          paragraph('Access to the software does not transfer ownership or intellectual property rights to users or Institutions, except as expressly agreed in writing.'),
        ],
      },
      {
        heading: '11. Service Availability',
        blocks: [
          paragraph('We aim to maintain reliable software services. Temporary interruptions may occur due to maintenance, connectivity issues, payment provider outages, security incidents, or circumstances beyond our reasonable control.'),
          paragraph('We will take reasonable steps to address reported technical issues.'),
        ],
      },
      {
        heading: '12. Third-Party Services',
        blocks: [
          paragraph('Payment gateways and other integrated services may be governed by separate terms and conditions.'),
          paragraph('Users and Institutions must comply with the applicable requirements of the authorized third-party service providers.'),
        ],
      },
      {
        heading: '13. Liability',
        blocks: [
          paragraph('To the extent permitted by applicable law, our liability will be assessed in accordance with the applicable service agreement and the circumstances of the claim.'),
          paragraph('Nothing in these terms excludes or limits liability or consumer rights that cannot lawfully be excluded or limited.'),
        ],
      },
      {
        heading: '14. Changes to These Terms',
        blocks: [
          paragraph('We may revise these Terms & Conditions when required by changes in our services, business operations, or applicable requirements. The latest version will be published on our website.'),
        ],
      },
      {
        heading: '15. Governing Law',
        blocks: [
          paragraph('These Terms & Conditions are subject to the laws applicable in India. Any dispute will be addressed in accordance with the applicable agreement and the jurisdiction of competent courts under applicable law.'),
        ],
      },
      { heading: '16. Contact Us', blocks: [email('info@aadishala.com')] },
    ],
  },

  '/refund-policy': {
    title: 'Refund Policy',
    intro: 'How institutional fee refund requests are reviewed and processed through Aadishala.',
    sections: [
      {
        heading: '1. Introduction',
        blocks: [
          paragraph('This Refund Policy applies to fee payments facilitated through the Aadishala School Management Software.'),
          paragraph('The software may be used by multiple schools, societies, universities, and other educational institutions to collect admission fees, tuition fees, examination fees, and other applicable institutional charges.'),
        ],
      },
      {
        heading: '2. Responsibility for Institutional Fees',
        blocks: [
          paragraph('The relevant Institution determines its fees and applicable refund rules, subject to applicable law and its contractual obligations.'),
          paragraph('Refund eligibility will depend on the type of fee paid, the Institution\u2019s disclosed policy, the reason for the request, the status of admission or educational services, and applicable legal requirements.'),
          paragraph('Our company provides software and payment integration facilities. The party responsible for authorizing and funding a refund will depend on the approved payment arrangement and the relevant agreements.'),
        ],
      },
      {
        heading: '3. Circumstances for Refund Review',
        blocks: [
          paragraph('A refund request may be reviewed in circumstances including:'),
          list(
            'Duplicate payment of the same fee.',
            'A confirmed payment debit that has not been appropriately credited or reconciled.',
            'Cancellation of an admission, course, examination, or service where a refund is due under the applicable policy or law.',
            'Cancellation of a relevant service by the Institution where a refund is required.',
            'Incorrect collection or excess payment confirmed through transaction verification.',
            'Other circumstances in which a refund is required by applicable law or approved following review.',
          ),
          paragraph('A refund is not automatically approved merely because a request has been submitted.'),
        ],
      },
      {
        heading: '4. Case-by-Case Assessment',
        blocks: [
          paragraph('Refund requests may be assessed individually based on the Institution\u2019s disclosed rules, the nature of the fee, the stage of admission or service delivery, supporting documents, and applicable legal requirements.'),
          paragraph('Any non-refundable fee or deduction must have a valid basis, be appropriately disclosed, and comply with applicable law.'),
          paragraph('Nothing in this policy removes a student\u2019s statutory rights.'),
        ],
      },
      {
        heading: '5. How to Request a Refund',
        blocks: [
          paragraph('Students or parents should submit their refund request through the relevant Institution\u2019s designated support or administrative channel, or through the support process communicated for the payment.'),
          paragraph('The request should include:'),
          list(
            'Student name and relevant registration or admission reference.',
            'Institution name.',
            'Fee type and amount.',
            'Payment date and transaction reference.',
            'Reason for the refund request.',
            'Supporting payment proof, where available.',
          ),
          paragraph('Do not provide passwords, OTPs, CVV numbers, or complete payment card credentials.'),
        ],
      },
      {
        heading: '6. Review Timeline',
        blocks: [
          paragraph('We aim to review complete refund requests and communicate the review outcome within 3\u20135 working days after receiving the information required to assess the request.'),
          paragraph('This is a review target, not a guarantee that every request will be approved or that funds will be credited within that period.'),
          paragraph('Additional verification or information from the Institution, bank, or payment provider may be required.'),
        ],
      },
      {
        heading: '7. Refund Processing',
        blocks: [
          paragraph('Once a refund has been approved by the party authorized to approve it, the refund will be initiated through the original payment method or another permitted method, as appropriate to the transaction and applicable rules.'),
          paragraph('The time taken for the refund to appear in the customer\u2019s account depends on the payment provider, bank, and relevant payment method.'),
        ],
      },
      {
        heading: '8. Pending and Failed Transactions',
        blocks: [
          paragraph('If an amount has been debited but the transaction is showing as pending or unsuccessful, the transaction must first be verified using the available payment records.'),
          paragraph('Where a duplicate payment, excess collection, or refundable failed transaction is confirmed, the request will be handled in accordance with the applicable payment arrangement and legal requirements.'),
          paragraph('A pending status does not by itself confirm that the payment has permanently failed or that a refund has already been initiated.'),
        ],
      },
      {
        heading: '9. Policy and Institution-Specific Conditions',
        blocks: [
          paragraph('Additional conditions applicable to a particular Institution or fee type may be communicated through the Institution\u2019s fee schedule, admission information, or applicable written agreement.'),
          paragraph('Such conditions must be consistent with this policy and applicable law. Where there is a conflict, applicable legal requirements will prevail.'),
        ],
      },
      { heading: '10. Contact Us', blocks: [email('info@aadishala.com')] },
    ],
  },

  '/cancellation-policy': {
    title: 'Cancellation Policy',
    intro: 'How admission, course, examination, and educational-service cancellations are handled.',
    sections: [
      {
        heading: '1. Introduction',
        blocks: [
          paragraph('This Cancellation Policy applies to cancellation requests relating to admissions, course registrations, examination registrations, and other educational services managed through the School Management Software provided by Aadishala.'),
          paragraph('The software may be used by multiple schools, societies, universities, and other educational institutions.'),
        ],
      },
      {
        heading: '2. Institution-Specific Cancellation Rules',
        blocks: [
          paragraph('Each Institution is responsible for establishing and communicating its admission rules, cancellation conditions, fee schedules, and applicable refund terms.'),
          paragraph('Cancellation eligibility may differ according to the type of fee, course, examination, admission status, service already provided, and the Institution\u2019s disclosed conditions.'),
          paragraph('All cancellation conditions must comply with applicable law.'),
        ],
      },
      {
        heading: '3. How to Request Cancellation',
        blocks: [
          paragraph('Students or parents should submit cancellation requests through the relevant Institution\u2019s designated admissions office, administrative channel, or support process.'),
          paragraph('The request should include:'),
          list(
            'Student name and registration or admission reference.',
            'Institution name.',
            'Course, examination, or service details.',
            'Relevant payment transaction reference, if applicable.',
            'Reason for cancellation.',
            'Supporting documents, where required.',
          ),
        ],
      },
      {
        heading: '4. Cancellation Before Admission or Service Commencement',
        blocks: [
          paragraph('Requests submitted before admission confirmation or before a relevant course or service begins will be reviewed under the applicable Institution\u2019s disclosed conditions and applicable law.'),
          paragraph('Any eligible refund will be assessed under the applicable Refund Policy.'),
          paragraph('Submitting a cancellation request does not automatically mean that a refund has been approved.'),
        ],
      },
      {
        heading: '5. Cancellation After Admission or Service Commencement',
        blocks: [
          paragraph('Requests submitted after admission confirmation, course commencement, examination registration, or the provision of educational services will be assessed according to the applicable Institution\u2019s rules, the service already provided, any disclosed cancellation conditions, and applicable law.'),
          paragraph('Any deduction or restriction must be lawful and appropriately disclosed.'),
        ],
      },
      {
        heading: '6. Cancellation by an Institution',
        blocks: [
          paragraph('If an Institution cancels an admission process, course, examination, or other service, it should communicate the relevant information to affected students or parents.'),
          paragraph('Any refund, rescheduling, or alternative arrangement will be determined under the applicable Institution\u2019s policies, the relevant agreements, and applicable law.'),
        ],
      },
      {
        heading: '7. Payment and Refund Processing',
        blocks: [
          paragraph('Where cancellation results in an eligible refund, the refund will be processed according to the Refund Policy and the approved payment arrangement.'),
          paragraph('The relevant Institution and authorized payment service provider may need to verify the original transaction before a refund is initiated.'),
        ],
      },
      {
        heading: '8. Role of the Software Provider',
        blocks: [
          paragraph('Our company provides software facilities to help Institutions manage student records, fee information, payment status, and administrative processes.'),
          paragraph('The Institution\u2019s admission decisions, academic rules, and fee cancellation conditions remain governed by its own disclosed policies and applicable agreements.'),
          paragraph('The respective responsibilities for approving, initiating, and funding refunds will follow the applicable payment arrangement and legal requirements.'),
        ],
      },
      {
        heading: '9. Mutually Agreed Terms',
        blocks: [
          paragraph('Where additional cancellation conditions have been mutually agreed between the relevant parties in a written agreement, those conditions may apply to the extent that they are consistent with the policies disclosed to the affected user and applicable law.'),
          paragraph('No agreement will override mandatory statutory rights.'),
        ],
      },
      {
        heading: '10. Policy Updates',
        blocks: [
          paragraph('This policy may be updated to reflect changes in the software, institutional arrangements, or applicable requirements. The latest version will be published on our website.'),
        ],
      },
      { heading: '11. Contact Us', blocks: [email('info@aadishala.com')] },
    ],
  },
};
