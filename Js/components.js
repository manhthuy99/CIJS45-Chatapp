const components = {}
components.welcomeScreen = `
  <h1>Welcome to screen</h1> 
`
components.registerScreen = `
<div class="register-container">
        <div class="aside-right">
            <div class="header">
                <h3>MindX chat</h3>
            </div>
            <form id="register-form">
                <div class="input-name-wrapper">
                    <div class="input-wrapper">
                        <input type="text" placeholder="Frist name..." name="firstName">
                        <div class="error" id="first-name-error"></div>
                    </div>
                    <div class="input-wrapper">
                        <input type="text" placeholder="Last name..." name="lastName">
                        <div class="error" id="last-name-error"></div>
                    </div>
                </div>
                <div class="input-wrapper">
                    <input type="text" placeholder="Email..." name="email">
                    <div class="error" id="email-error"></div>
                </div>
                <div class="input-wrapper">
                    <input type="text" placeholder="Password..." name="password">
                    <div class="error" id="password-error"></div>
                </div>
                <div class="input-wrapper">
                    <input type="text" placeholder="Confirm Password..." name="confirmPassword">
                    <div class="error" id="confirm-password-error"></div>
                </div>
                <div class="form-action">
                    <span class="cursor-pointer" id="redirect-to-login" onclick="redirect_to_login()">
                        Already have an account? login
                    </span>
                    <button class="btn" type="submit">Register</button>
                </div>
            </form>
        </div>
    </div>
`
components.loginScreen = `
<div class="login-container">
        <div class="aside-right">
            <div class="header">
                <h3>MindX chat</h3>
            </div>
            <form id="login-form">
                <div class="input-wrapper">
                    <input type="text" placeholder="Email..." name="email">
                    <div class="error" id="email-error"></div>
                </div>
                <div class="input-wrapper">
                    <input type="text" placeholder="Password..." name="password">
                    <div class="error" id="password-error"></div>
                </div>
                <div class="form-action">
                    <span class="cursor-pointer" id="redirect-to-register" onclick="redirect_to_register()">
                        Already have an account? register
                    </span>
                    <button class="btn" type="submit">Login</button>
                </div>
            </form>
        </div>
    </div>
`
.components.chatScreen = ` <h1>Welcome to chatScreen </h1>`