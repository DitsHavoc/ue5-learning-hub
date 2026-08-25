# Learning Hub account setup

## Student flow

1. Teacher creates a class in Teacher Dashboard.
2. Copy the class join code.
3. Student chooses **Sign in → Create account**.
4. Student enters display name, accessible email, password and class code.
5. The class code is checked before account creation.
6. If Supabase email confirmation is enabled, the student confirms the email then signs in.
7. The pending class code is automatically applied after the first successful sign-in.
8. Local browser progress is migrated into the cloud account.

## Password recovery

The Sign In panel includes **Forgot password?**.
Supabase sends a recovery link. Opening that link returns to the Learning Hub and opens the new-password form.

## Supabase Auth URL configuration

Before cohort use, Supabase Authentication → URL Configuration should contain the actual frontend origin, for example:

`https://ue5-learning-hub.onrender.com`

If a custom domain is added later, add that origin too.

## Email delivery

For small testing the built-in Supabase email sender may be enough.
For a class rollout, configure custom SMTP so confirmations/recovery emails do not hit the built-in testing limits.

## Microsoft later

Microsoft SSO is still available architecturally but `microsoftEnabled` remains `false`.
Native Learning Hub accounts do not require Microsoft Entra or Microsoft Graph.
