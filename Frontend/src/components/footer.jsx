import React from 'react'

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8 px-4">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div>
                        <h2 className="text-xl font-semibold">Contact Information</h2>
                        <p className="mt-2">Phone: 7264833272</p>
                        <p>Email: nageshsm22@gmail.com</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold">Terms and Conditions</h2>
                        <div className="mt-2">
                            <h3 className="font-medium">Payment</h3>
                            <p className=' text-sm font-thin'>All payments must be made at the time of ordering or on time of Delivery as choosed when placing the orders.Payments made through Razorpay are subject to verification and acceptance. The total amount charged includes applicable taxes and fees. You will receive a confirmation email upon successful payment.</p>
                        </div>
                        <div className="mt-2">
                            <h3 className="font-medium">Delivery</h3>
                            <p className=' text-sm font-thin'>Delivery times are estimates and may vary.</p>
                        </div>
                        <div className="mt-2">
                            <h3 className="font-medium">Refunds</h3>
                            <p className=' text-sm font-thin'>Refunds are processed within 7 days of cancellation.Refunds and cancellations are governed by our Cancellation and Refund Policy. Refunds, if applicable, are processed through Razorpay and credited back to the original payment method.</p>
                        </div>
                        <div className="mt-2">
                            <h3 className="font-medium">Security</h3>
                            <p className=' text-sm font-thin'>We prioritize the security of your personal and financial information. All payment details are securely handled by Razorpay, and we do not store your payment information on our servers.</p>
                        </div>
                        <div className="mt-2">
                            <h3 className="font-medium">Limitation of Liability</h3>
                            <p className=' text-sm font-thin'>IT Food&Delivery Wala is not liable for any losses or damages resulting from the use of Razorpay’s services. For payment-related issues, please contact Razorpay’s customer support.</p>
                        </div>
                        <div className="mt-2">
                            <h3 className="font-medium">Changes to the Terms</h3>
                            <p className=' text-sm font-thin'>We reserve the right to modify these terms and conditions at any time without prior notice. Updated terms will be posted on our website, and it is your responsibility to review them periodically.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-8 relative flex space-x-2">
                <p className='absolute left-1 text-xs font-thin' >&copy; 2024 .All rights reserved.</p>
                <p className='absolute right-1 text-right text-xs font-thin'> Developed by Nagesh Merva</p>
            </div>
            <div className='h-[90px] w-full'>
            </div>
        </footer>
    )
}

export default Footer
