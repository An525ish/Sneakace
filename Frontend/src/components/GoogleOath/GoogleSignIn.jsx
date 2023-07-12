import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode'

const GoogleSignIn = () => {
    return (
        <div className='main-container'>
      {/* For normal outlined button */}
            <GoogleOAuthProvider clientId="692905987977-5tj050ch6a1vi7pu7eo5vk48uv59qk7t.apps.googleusercontent.com">

                <GoogleLogin
                    onSuccess={credentialResponse => {
                        const details = jwt_decode(credentialResponse.credential);
                        console.log(details)
                        console.log(credentialResponse);
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />
            </GoogleOAuthProvider>
         {/* For filled blude button */}
            {/* <GoogleOAuthProvider clientId="401289267989-9mb2gnrnml6ru7gfjbjq9ete1j5h0ukm.apps.googleusercontent.com">

                <GoogleLogin
                    onSuccess={credentialResponse => {
                        const details = jwt_decode(credentialResponse.credential);
                        console.log(details)
                        console.log(credentialResponse);
                    }}
                    theme='filled_blue'
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />
            </GoogleOAuthProvider> */}
       {/* For filled black curved button. */}
            {/* <GoogleOAuthProvider clientId="401289267989-9mb2gnrnml6ru7gfjbjq9ete1j5h0ukm.apps.googleusercontent.com">

                <GoogleLogin
                    onSuccess={credentialResponse => {
                        const details = jwt_decode(credentialResponse.credential);
                        console.log(details)
                        console.log(credentialResponse);
                    }}
                    theme='filled_black'
                    shape='pill'
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />
            </GoogleOAuthProvider> */}
        </div>
    )
}

export default GoogleSignIn