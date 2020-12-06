import "./styles.scss";

const SignUpPage = () => {
    return (
        <form class="form-signin text-center" _lpchecked="1">
            <img class="mb-4" src="/bootstrap-solid.svg" alt="" width="72" height="72" />
            <h1 class="h3 mb-3 font-weight-normal">Please log in</h1>
            <label for="inputEmail" class="sr-only">Email address</label>
            <input
            type="email"
            id="inputEmail"
             class="form-control"
              placeholder="Email address" 
              required="" 
              autofocus=""
               autocomplete="off"
                style={{
                    backgroundImage: "url('&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;')",
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'scroll', 
                    backgroundSize: '16px 18px', 
                    backgroundPosition: '98% 50%', 
                    cursor: 'pointer',
                }} />
            <label for="inputPassword" class="sr-only">Password</label>
            <input 
            type="password" 
            id="inputPassword" 
            class="form-control" 
            placeholder="Password" 
            required="" 
            autocomplete="off" 
            style={{
                backgroundImage: "url('&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;')",
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'scroll',
                backgroundSize: '16px 18px',
                backgroundPosition: '98% 50%',
                cursor: 'auto'
            }}
            />
            <div class="checkbox mb-3">
                <label>
                <input type="checkbox" value="remember-me"/>  Remember me
                </label>
            </div>
            <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            <p class="mt-5 mb-3 text-muted">© 2017-2020</p>
        </form>
    );
}
 
export default SignUpPage;