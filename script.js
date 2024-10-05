// script.js

const faqs = {"How do I create an account on your platform?": {
    answers: [
        "To create an account, click on 'Sign Up' on the homepage. Fill in the required information, and follow the prompts to complete your registration.",
        "You can create an account by providing your email address and setting a password. A verification email will be sent to you to confirm your account."
    ],
    variations: [
        "I want to create an account.",
        "How to sign up?",
        "Can you help me make an account?"
    ]
},
"What should I do if I forget my password?": {
    answers: [
        "If you forget your password, click on the 'Forgot Password' link on the login page. Follow the instructions in the email you receive to reset your password.",
        "You can reset your password by clicking on the 'Forgot Password' option, entering your registered email, and following the reset link sent to your inbox."
    ],
    variations: [
        "I forgot my password.",
        "How can I reset my password?",
        "What if I can't remember my password?"
    ]
},
"Can I change my email address or phone number?": {
    answers: [
        "Yes, you can update your email address or phone number in your account settings under the 'Profile' section.",
        "To change your contact information, log in to your account, navigate to your profile settings, and make the necessary updates."
    ],
    variations: [
        "How to change my email?",
        "Can I update my phone number?",
        "Is it possible to modify my email address?"
    ]
},
"How do I delete my account?": {
    answers: [
        "To delete your account, please contact our customer support team. They will guide you through the process and ensure your account is closed securely.",
        "Account deletion can be initiated by reaching out to customer support. Ensure to review our data retention policies before proceeding."
    ],
    variations: [
        "How can I delete my account?",
        "I want to remove my account."
    ]
},
"What should I do if my account is hacked?": {
    answers: [
        "If you suspect that your account has been hacked, immediately reset your password and contact our support team for further assistance.",
        "Please report any unauthorized access to your account to our customer support team as soon as possible for a thorough investigation."
    ],
    variations: [
        "What if my account is compromised?",
        "How do I secure my hacked account?"
    ]
},
"Can I have multiple accounts?": {
    answers: [
        "While you can create multiple accounts, we recommend having only one account for easier management and to comply with our policies.",
        "Creating multiple accounts is allowed, but please be aware that it may affect your rewards and loyalty points."
    ],
    variations: [
        "Is it possible to have more than one account?",
        "Can I create multiple profiles?"
    ]
},
"How do I update my profile information?": {
    answers: [
        "You can update your profile information by logging into your account and navigating to the 'Profile' section. Make the necessary changes and save them.",
        "To update your profile, log in and go to your account settings, where you can edit your information."
    ],
    variations: [
        "How can I change my profile details?",
        "Is there a way to edit my account information?"
    ]
},
"What if I am facing issues logging in?": {
    answers: [
        "If you are having trouble logging in, ensure that you are using the correct email and password. If the issue persists, use the 'Forgot Password' option to reset your password.",
        "Check your internet connection and ensure your credentials are correct. If problems continue, please contact our support team for help."
    ],
    variations: [
        "I can't log into my account.",
        "What should I do if I can't access my profile?"
    ]
},
"How do I place an order?": {
    answers: [
        "To place an order, browse through the available restaurants, select your desired items, and click 'Add to Cart.' Proceed to checkout to complete your order.",
        "Simply choose a restaurant, select your meals, and follow the prompts to finalize your order and make payment."
    ],
    variations: [
        "Can you help me order food?",
        "How can I make an order?"
    ]
},
"Can I modify my order after placing it?": {
    answers: [
        "Unfortunately, once an order is confirmed, modifications cannot be made. You may cancel the order and place a new one if necessary.",
        "Once the order is placed, you typically cannot modify it. If you need changes, contact support as soon as possible."
    ],
    variations: [
        "Is it possible to change my order?",
        "Can I alter my order after confirming it?"
    ]
},
"How do I cancel an order?": {
    answers: [
        "To cancel an order, navigate to your order history and select the order you wish to cancel. If it’s still in preparation, you’ll see the cancel option.",
        "You can cancel an order by accessing your order details within the app and selecting the cancel option. Be aware of any cancellation policies."
    ],
    variations: [
        "What’s the process to cancel my order?",
        "How can I withdraw an order?"
    ]
},
"What happens if my order is late?": {
    answers: [
        "If your order is delayed, you will receive an update via the app. If the delay is significant, feel free to reach out to customer support.",
        "We strive for timely deliveries. If your order is late, please contact our support team for assistance and potential compensation."
    ],
    variations: [
        "What if my order doesn't arrive on time?",
        "How do you handle late deliveries?"
    ]
},
"Can I schedule a delivery for a later time?": {
    answers: [
        "Yes, you can schedule a delivery during the checkout process. Select your preferred time from the available options.",
        "Delivery scheduling is available when placing your order. Choose a time that suits you best."
    ],
    variations: [
        "How do I set a delivery for later?",
        "Can I book a delivery time?"
    ]
},
"Do you offer contactless delivery?": {
    answers: [
        "Yes, we offer contactless delivery options. You can select this preference during checkout.",
        "Contactless delivery is available for your safety. Please indicate your preference when placing your order."
    ],
    variations: [
        "Is contactless delivery an option?",
        "Can I receive my order without direct contact?"
    ]
},
"What should I do if my order is incorrect?": {
    answers: [
        "If your order is incorrect, please contact our customer support immediately with your order details for assistance.",
        "Report any discrepancies in your order to our support team within a reasonable time frame for resolution."
    ],
    variations: [
        "What if I receive the wrong order?",
        "How do I handle an incorrect order?"
    ]
},
"How can I reorder my previous orders?": {
    answers: [
        "To reorder, go to your order history, find the previous order, and select the 'Reorder' option to add the items back to your cart.",
        "You can easily reorder items from your past orders by accessing your order history and selecting the 'Reorder' button."
    ],
    variations: [
        "Can I repeat an order?",
        "How do I get my previous orders again?"
    ]
},
"What payment methods do you accept?": {
    answers: [
        "We accept various payment methods, including credit cards, debit cards, digital wallets, and cash on delivery.",
        "Our platform supports multiple payment options, such as credit and debit cards, net banking, and cash upon delivery."
    ],
    variations: [
        "What forms of payment can I use?",
        "How do I pay for my order?"
    ]
},
"How do I apply a promo code?": {
    answers: [
        "To apply a promo code, enter the code in the designated field during the checkout process before confirming your order.",
        "Enter your promo code in the 'Promo Code' section at checkout to apply the discount."
    ],
    variations: [
        "Can I use a discount code?",
        "How do I redeem a promo code?"
    ]
},
"Can I pay cash on delivery?": {
    answers: [
        "Yes, cash on delivery is available as a payment option for your convenience. You can select it during checkout.",
        "You have the option to pay with cash upon delivery if you prefer this method."
    ],
    variations: [
        "Is cash payment accepted on delivery?",
        "Can I pay with cash when I receive my order?"
    ]
},
"How long does it take to process a refund?": {
    answers: [
        "Refunds are typically processed within 5-7 business days, depending on your bank's processing times.",
        "Once initiated, refunds can take up to a week to reflect in your account. Please check with your bank for specifics."
    ],
    variations: [
        "What is the refund processing time?",
        "How long until I receive my refund?"
    ]
},
"What should I do if my payment fails?": {
    answers: [
        "If your payment fails, please check your payment details and try again. If the issue persists, contact your bank or support for assistance.",
        "In case of a payment failure, verify your payment method and try again. For continued issues, reach out to customer support."
    ],
    variations: [
        "What if my payment doesn't go through?",
        "How do I resolve a payment failure?"
    ]
},
"Is it safe to save my payment information on your platform?": {
    answers: [
        "Yes, we prioritize your security. Your payment information is encrypted and stored securely.",
        "We implement robust security measures to protect your payment information. You can save it with confidence."
    ],
    variations: [
        "Is my payment info safe?",
        "How do you protect my payment details?"
    ]
},
"Can I get a receipt for my order?": {
    answers: [
        "Yes, you will receive an electronic receipt via email once your order is confirmed and delivered.",
        "A receipt will be sent to your registered email after the completion of your order."
    ],
    variations: [
        "Do I receive a receipt?",
        "How can I get a copy of my order receipt?"
    ]
},
"What should I do if I’m overcharged?": {
    answers: [
        "If you believe you have been overcharged, please contact our customer support with your order details for a review.",
        "Report any discrepancies in charges to our support team promptly for investigation and resolution."
    ],
    variations: [
        "What if I paid more than expected?",
        "How do I address an overcharge issue?"
    ]
},
"How do I track my order?": {
    answers: [
        "To track your order, go to your order history or the tracking link provided in your confirmation email.",
        "You can monitor your order status through the app or website under 'My Orders.'"
    ],
    variations: [
        "Can I see where my order is?",
        "How do I track my delivery?"
    ]
},
"What should I do if my delivery is delayed?": {
    answers: [
        "If your delivery is delayed, please check the tracking status and contact our support team if needed.",
        "For any delays, feel free to reach out to customer support for assistance and updates on your delivery."
    ],
    variations: [
        "What if my order is late?",
        "How do I handle a delayed delivery?"
    ]
},
"How are delivery fees calculated?": {
    answers: [
        "Delivery fees are based on various factors, including distance, time of day, and any applicable promotions.",
        "Our delivery fees are calculated based on your location and the restaurant’s policies. You can view the fee before completing your order."
    ],
    variations: [
        "What determines the delivery charge?",
        "How do you calculate delivery fees?"
    ]
},
"Can I specify delivery instructions?": {
    answers: [
        "Yes, during checkout, you can provide special instructions for your delivery to ensure it meets your preferences.",
        "You have the option to add delivery instructions at checkout for your driver."
    ],
    variations: [
        "Can I give specific delivery details?",
        "How do I add instructions for delivery?"
    ]
},
"Do you deliver to my area?": {
    answers: [
        "You can check our delivery coverage by entering your address on our website or app. We deliver to most areas.",
        "To see if we deliver to your location, enter your address during the order process, and we’ll confirm availability."
    ],
    variations: [
        "Is my area covered for delivery?",
        "Can you deliver to my location?"
    ]
},
"What happens if I’m not at home when my order arrives?": {
    answers: [
        "If you’re not at home, our driver will try to reach you via phone. If unsuccessful, the order may be returned or dropped off at a safe location.",
        "In case you are not at home, the delivery driver will contact you for further instructions, and your order will be handled according to our policy."
    ],
    variations: [
        "What if I'm not home for my delivery?",
        "How do you handle missed deliveries?"
    ]
},
"Can I change the delivery address after placing an order?": {
    answers: [
        "You can change the delivery address if your order hasn’t been processed yet. Contact customer support for assistance.",
        "If you need to change the address, please reach out to support as soon as possible before your order is out for delivery."
    ],
    variations: [
        "Can I modify the delivery address?",
        "How do I update my delivery location?"
    ]
},
"How do I contact my delivery driver?": {
    answers: [
        "You can contact your delivery driver through the app once the order is on its way. Their contact details will be provided.",
        "When your order is out for delivery, you’ll receive your driver’s contact information for direct communication."
    ],
    variations: [
        "How can I reach my delivery person?",
        "Is there a way to contact my driver?"
    ]
},
"How do I find restaurants near me?": {
    answers: [
        "To find restaurants near you, use our app or website to enter your location, and browse the listings available in your area.",
        "You can easily search for nearby restaurants by enabling location services or entering your address in the search bar."
    ],
    variations: [
        "Can you help me find local restaurants?",
        "How do I see restaurants around me?"
    ]
},
"Can I leave a review for a restaurant?": {
    answers: [
        "Yes, you can leave a review after your order is delivered. Go to the restaurant's page and share your feedback.",
        "To review a restaurant, visit their profile on our platform after your meal and submit your comments and ratings."
    ],
    variations: [
        "How do I provide feedback for a restaurant?",
        "Can I rate a restaurant?"
    ]
},
"What should I do if my favorite restaurant is not listed?": {
    answers: [
        "If your favorite restaurant is not listed, please let us know through our feedback form. We’re always looking to expand our offerings.",
        "You can submit a request for your favorite restaurant to be added by contacting customer support with their details."
    ],
    variations: [
        "Can I request a restaurant that’s not on the app?",
        "What if I want my favorite restaurant included?"
    ]
},
"How do you ensure food quality and safety?": {
    answers: [
        "We partner with restaurants that comply with health regulations and maintain high standards of food safety and quality.",
        "Food quality is our priority. We work with trusted restaurants and conduct regular audits to ensure compliance with safety standards."
    ],
    variations: [
        "How do you maintain food safety?",
        "What measures are in place for food quality?"
    ]
},
"Are the restaurant ratings trustworthy?": {
    answers: [
        "Yes, our restaurant ratings are based on customer reviews and feedback, providing a reliable measure of quality and service.",
        "Ratings are collected from customer experiences, ensuring transparency and authenticity in our reviews."
    ],
    variations: [
        "Can I trust restaurant ratings?",
        "How are ratings determined?"
    ]
},
"Can I filter restaurants by cuisine?": {
    answers: [
        "Yes, you can filter restaurants by cuisine type using the filters available on our app or website.",
        "Easily find your preferred cuisine by selecting the type from the filter options in the restaurant listings."
    ],
    variations: [
        "How do I search by cuisine?",
        "Can I see restaurants based on food type?"
    ]
},
"Do restaurants offer special menus for dietary restrictions?": {
    answers: [
        "Many restaurants provide special menus for dietary restrictions. Check the restaurant’s profile for available options.",
        "To cater to dietary needs, some restaurants offer specific menu items. Look for dietary tags on their listings."
    ],
    variations: [
        "Are there options for dietary restrictions?",
        "Can I find special menus for allergies?"
    ]
},
"How can I contact customer support?": {
    answers: [
        "You can contact customer support through the 'Help' section on our app or website. We offer chat support, email, and phone assistance.",
        "Reach out to customer support via the contact information provided on our website. We’re here to help you!"
    ],
    variations: [
        "What is the customer support number?",
        "How do I reach customer service?"
    ]
},
"What are your customer service hours?": {
    answers: [
        "Our customer service team is available 24/7 to assist you with any inquiries or issues you may have.",
        "We provide round-the-clock customer support to ensure your questions are answered at any time."
    ],
    variations: [
        "When can I contact customer service?",
        "What are the hours for customer support?"
    ]
},
"How do I report a problem with my order?": {
    answers: [
        "If you encounter a problem with your order, please contact our support team immediately with your order details.",
        "You can report any issues by reaching out to our customer service through the app or website, and we’ll resolve it promptly."
    ],
    variations: [
        "What if there’s an issue with my order?",
        "How can I file a complaint about my order?"
    ]
},
"Can I provide feedback on my experience?": {
    answers: [
        "Yes, we value your feedback. You can leave your comments through our feedback form in the app or website.",
        "Your experience matters to us! Please share your thoughts via the feedback option available in your account."
    ],
    variations: [
        "How do I give feedback?",
        "Can I share my experience?"
    ]
},
"What should I do if I have a complaint?": {
    answers: [
        "If you have a complaint, please contact our customer support team with details of your issue, and we will address it promptly.",
        "To file a complaint, reach out to our support team with your concerns, and we’ll ensure a thorough review."
    ],
    variations: [
        "How can I lodge a complaint?",
        "What if I’m unhappy with my service?"
    ]
},
"Do you have a help center or FAQs section?": {
    answers: [
        "Yes, we have a comprehensive help center and FAQs section on our website and app, where you can find answers to common questions.",
        "Our help center contains a wealth of information and FAQs to assist you with any inquiries you may have."
    ],
    variations: [
        "Where can I find FAQs?",
        "Do you offer a help section?"
    ]
},
"How do you handle feedback and complaints?": {
    answers: [
        "We take feedback seriously. Complaints are reviewed by our team to ensure that necessary actions are taken for improvement.",
        "All feedback is logged and assessed by our customer support team to enhance our services continually."
    ],
    variations: [
        "What happens to my feedback?",
        "How are complaints managed?"
    ]
},
"Do you have a loyalty program?": {
    answers: [
        "Yes, we have a loyalty program that rewards you for your orders. Sign up in the app to start earning points!",
        "Join our loyalty program to earn rewards on every purchase. Check our website for details on how to enroll."
    ],
    variations: [
        "How can I join the loyalty program?",
        "Are there benefits for loyal customers?"
    ]
},
"How can I earn rewards points?": {
    answers: [
        "You can earn rewards points by placing orders through our platform. Points accumulate with every purchase you make.",
        "Each order you place contributes to your rewards points, which can be redeemed for discounts on future orders."
    ],
    variations: [
        "How do I accumulate points?",
        "Can I earn rewards for my purchases?"
    ]
},
"Are there any ongoing promotions?": {
    answers: [
        "Yes, we frequently offer promotions and discounts. Check the promotions section on our app or website for current deals.",
        "Stay updated with our ongoing promotions by visiting the promotions tab in our app."
    ],
    variations: [
        "What promotions are available now?",
        "Can I find current offers?"
    ]
},
"Can I combine different promo codes?": {
    answers: [
        "Generally, only one promo code can be applied per order. Please check the terms for each code to ensure eligibility.",
        "Promo codes cannot be combined unless specified in the terms and conditions of the individual promotions."
    ],
    variations: [
        "Can I stack promo codes?",
        "How do promo codes work?"
    ]
},
"What benefits do members receive?": {
    answers: [
        "Members receive exclusive discounts, rewards points, and early access to special promotions.",
        "Joining as a member allows you to enjoy additional perks like exclusive offers and rewards."
    ],
    variations: [
        "What are the advantages of membership?",
        "How do members benefit?"
    ]
},
"How do I refer a friend?": {
    answers: [
        "You can refer a friend by sharing your referral link found in the app. Once your friend makes their first order, you both earn rewards.",
        "To refer a friend, simply share your unique referral code through the app, and earn rewards when they sign up and place an order."
    ],
    variations: [
        "How can I invite a friend?",
        "Do you have a referral program?"
    ]
},
"What should I do if I encounter a technical issue?": {
    answers: [
        "If you face a technical issue, please try restarting the app or refreshing the page. If the problem persists, contact our support team.",
        "For technical issues, restart the app or device. If problems continue, reach out to our customer support for assistance."
    ],
    variations: [
        "How do I fix a technical problem?",
        "What if I have issues using the app?"
    ]
},
"How do you handle allergies in food preparation?": {
    answers: [
        "We advise customers to inform restaurants of any allergies. While restaurants take precautions, we recommend checking with them directly.",
        "Restaurants are encouraged to note allergies during preparation. However, it’s best to communicate your allergies directly to the restaurant."
    ],
    variations: [
        "How do you manage food allergies?",
        "What is your allergy policy?"
    ]
},
"Can I order food for someone else?": {
    answers: [
        "Yes, you can order food for someone else by entering their delivery address during the checkout process.",
        "To place an order for someone else, simply provide their address and contact information when checking out."
    ],
    variations: [
        "Can I send food to another person?",
        "Is it possible to order for someone else?"
    ]
},
"What is your policy on food wastage?": {
    answers: [
        "We are committed to reducing food wastage and partner with local organizations to donate excess food whenever possible.",
        "Our platform aims to minimize food wastage through initiatives that promote sustainability and community support."
    ],
    variations: [
        "How do you handle food waste?",
        "What are your policies regarding excess food?"
    ]
},
"Do you have a mobile app?": {
    answers: [
        "Yes, we offer a mobile app for both iOS and Android devices. Download it from the App Store or Google Play.",
        "Our mobile app is available for download, providing you with a convenient way to order food anytime, anywhere."
    ],
    variations: [
        "Is there a mobile application?",
        "Where can I get your app?"
    ]
},
"How can I stay updated on new features?": {
    answers: [
        "To stay updated, subscribe to our newsletter or follow us on social media for the latest features and promotions.",
        "We regularly update our users via email and social media about new features and enhancements."
    ],
    variations: [
        "How do I learn about updates?",
        "What’s the best way to find out about new features?"
    ]
},
"What if I want to partner with your platform as a restaurant?": {
    answers: [
        "If you wish to partner with us, please visit our website and fill out the partnership inquiry form. Our team will get back to you shortly.",
        "To join our platform as a restaurant, fill out the partnership form on our website, and we will review your application."
    ],
    variations: [
        "How can my restaurant join your platform?",
        "What’s the process to partner with you?"
    ]
},
"Is there a minimum order amount for delivery?": {
    answers: [
        "Yes, there may be a minimum order amount depending on the restaurant and your location. This will be shown at checkout.",
        "Minimum order amounts may apply. Check the restaurant's details during the checkout process."
    ],
    variations: [
        "What is the minimum order for delivery?",
        "Is there a required minimum order amount?"
    ]
},
};

document.getElementById("send-button").addEventListener("click", function() {
    const userInput = document.getElementById("user-input").value;
    document.getElementById("chat-log").innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
    const response = getResponse(userInput);
    document.getElementById("chat-log").innerHTML += `<p><strong>Bot:</strong> ${response}</p>`;
    document.getElementById("user-input").value = ""; // Clear input
});

function getResponse(input) {
    const lowerInput = input.toLowerCase();
    let bestMatch = { question: "", score: 0 };

    for (let question in faqs) {
        const { variations } = faqs[question];

        // Check for exact matches
        if (lowerInput === question.toLowerCase() || variations.some(variation => lowerInput === variation.toLowerCase())) {
            return faqs[question].answers[0]; // Return the first answer for exact matches
        }

        // Calculate similarity
        const score = calculateJaccardSimilarity(lowerInput, question.toLowerCase());
        if (score > bestMatch.score) {
            bestMatch = { question, score };
        }
    }

    // If a similar question was found, return the associated answer
    if (bestMatch.score > 0) {
        return faqs[bestMatch.question].answers[0]; // Return the first answer for the best match
    }

    return "I'm sorry, I don't have an answer for that. Please check our FAQs or contact support.";
}

// Function to calculate Jaccard Similarity
function calculateJaccardSimilarity(input, question) {
    const inputWords = new Set(input.split(" "));
    const questionWords = new Set(question.split(" "));

    const intersection = new Set([...inputWords].filter(word => questionWords.has(word)));
    const union = new Set([...inputWords, ...questionWords]);

    return intersection.size / union.size; // Return the Jaccard similarity index
}
