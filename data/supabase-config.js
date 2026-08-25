// UE5 Learning Hub v3.7.0
// Supabase backend is connected using a PUBLIC publishable key.
// Independent Learning Hub email/password accounts are enabled.
// Microsoft / Entra remains optional and OFF pending college approval.
// Never place a service_role key or Microsoft client secret here.
window.UE5_SUPABASE_CONFIG = {
  url: "https://zuqjrxcdgevutyyzsmni.supabase.co",
  publishableKey: "sb_publishable_4m9audF2FU5v9QCJk20dNw_SBTsQrpn",

  emailAuthEnabled: true,
  registrationRequiresClassCode: true,
  teacherBootstrapEnabled: true,
  accountLabel: "Learning Hub account",

  authProvider: "azure",
  microsoftEnabled: false,
  organisationLabel: "College Microsoft",
  loginLabel: "Sign in with college Microsoft account"
};
