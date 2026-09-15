/* UE5 Learning Hub v3.56.0 — LOCAL ONLY BACKEND
   Compatibility layer for the existing app.js.
   No Supabase client is created and no account/cloud method can send student data anywhere.
*/
(() => {
  'use strict';

  const listeners = [];
  const accountsRemoved = () => {
    throw new Error('Learning Hub accounts have been removed. Progress is stored only on this browser.');
  };

  const local = {
    mode: 'local',
    localOnly: true,
    client: null,
    user: null,
    profile: null,
    xpSummary: null,
    recoveryMode: false,
    microsoftEnabled: false,
    emailAuthEnabled: false,
    listeners,

    async init() {
      this.user = null;
      this.profile = null;
      this.xpSummary = null;
      this.recoveryMode = false;
      this.emit();
    },

    onChange(fn) {
      if (typeof fn === 'function') listeners.push(fn);
    },

    emit() {
      listeners.forEach(fn => {
        try { fn(this); } catch (err) { console.warn('[local-only backend listener]', err); }
      });
    },

    async signUpEmail() { return accountsRemoved(); },
    async signUpTeacher() { return accountsRemoved(); },
    async signInEmail() { return accountsRemoved(); },
    async signInMicrosoft() { return accountsRemoved(); },
    async signOut() { return true; },
    async resetPassword() { return accountsRemoved(); },
    async updatePassword() { return accountsRemoved(); },
    async validateClassCode() { return accountsRemoved(); },
    async validateTeacherBootstrap() { return accountsRemoved(); },

    async refreshXpSummary() {
      this.xpSummary = null;
      return null;
    }
  };

  // app.js contains older cloud-only screens. They are hidden by the v3.56.0
  // privacy layer, but a harmless fallback keeps an old bookmark from breaking
  // the whole Hub while never making a network request.
  const arrayPrefixes = /^(get|list|search|load|fetch)/i;
  window.UE5_BACKEND = new Proxy(local, {
    get(target, prop, receiver) {
      if (Reflect.has(target, prop)) return Reflect.get(target, prop, receiver);
      if (typeof prop !== 'string') return undefined;
      return async () => arrayPrefixes.test(prop) ? [] : null;
    }
  });

  console.info('[UE5 Hub] v3.56.0 local-only backend active — no cloud connection');
})();
