import Button from "./elements/Button"



export const Auth = () => {
    return(
        <div className="auth h-1/4 w-2/4">
            <form>
                <label className="ml-4 text-l" htmlFor="phone">Phone Number</label>
                <input className="ml-3" type="phone" id="email" required value="" placeholder=" Phone Number"/>&emsp;
                <label htmlFor="verificationCode">Verification Code</label>
                <input className="ml-4 text-l" type="text" id="verificationCode" value="" placeholder=" Verification Code" />
                <Button className="ml-5">Verify</Button>
                <div className="mx-auto">
                    <p className="text-white pl-10 mt-5 font-light">If you see a product that you think should have a verification code on it, please send an email to
                        customerservice@verifyitem.co with the product name, the brand name, and the location where you
                        purchased the product. We will speak with the manufacturer about protecting this product.
                    </p>
                </div>
            </form>
        </div>
    )
}