/* UE5 Learning Hub v3.47.0 — visible student signup feedback
   Fixes the classroom problem where an auth error was hidden behind the modal.
*/
(() => {
  'use strict';

  function status(form,message,kind=''){
    let box=form.querySelector('.signup-hotfix-status');
    if(!box){
      box=document.createElement('div');
      box.className='signup-hotfix-status';
      form.appendChild(box);
    }
    box.className=`signup-hotfix-status ${kind}`.trim();
    box.textContent=message;
    box.scrollIntoView({block:'nearest'});
  }

  function friendly(err){
    const raw=String(err?.message||err||'Could not create account.');
    const low=raw.toLowerCase();
    if(err?.status===429 || low.includes('rate limit') || low.includes('too many requests')){
      return 'Too many accounts are being created at once. Wait 60–90 seconds, then try again once.';
    }
    if(low.includes('already registered') || low.includes('already been registered') || low.includes('user already exists')){
      return 'That email already has a Learning Hub account. Use Sign in instead.';
    }
    if(low.includes('class') && (low.includes('invalid') || low.includes('not accepting'))){
      return 'That class code is not valid or is not currently accepting students. Check it with your teacher.';
    }
    if(low.includes('failed to fetch') || low.includes('network')){
      return 'The signup request could not reach the server. Check the connection, then try again.';
    }
    return raw;
  }

  document.addEventListener('submit',async event=>{
    const form=event.target.closest?.('form[data-action-form="auth-signup"]');
    if(!form)return;

    event.preventDefault();
    event.stopImmediatePropagation();

    if(!form.checkValidity()){
      form.reportValidity();
      status(form,'Check the highlighted field and try again.','bad');
      return;
    }

    const fd=new FormData(form);
    const password=String(fd.get('password')||'');
    const confirm=String(fd.get('confirm')||'');
    if(password.length<8){status(form,'Use a password of at least 8 characters.','bad');return}
    if(password!==confirm){status(form,'The two passwords do not match.','bad');return}

    const backend=window.UE5_BACKEND;
    if(!backend?.signUpEmail){
      status(form,'Learning Hub signup is unavailable. Refresh the page and try again.','bad');
      return;
    }

    const btn=form.querySelector('button[type="submit"]');
    const old=btn?.textContent||'Create account';
    if(btn){btn.disabled=true;btn.textContent='Creating account…'}
    status(form,'Checking the class code and creating your account…','working');

    try{
      const result=await Promise.race([
        backend.signUpEmail({
          displayName:fd.get('displayName'),
          email:fd.get('email'),
          password,
          classCode:fd.get('classCode')
        }),
        new Promise((_,reject)=>setTimeout(
          ()=>reject(new Error('The signup request timed out. Check the connection and try again.')),
          25000
        ))
      ]);

      if(result?.needsConfirmation){
        status(form,'Account created. Check your email, confirm it, then return and sign in. Your class code is saved.','good');
        if(btn){btn.disabled=true;btn.textContent='Account created'}
      }else{
        status(form,`Account created. Joined ${result?.classInfo?.class_name||'your class'}.`,'good');
        if(btn){btn.disabled=true;btn.textContent='Account created'}
        setTimeout(()=>location.reload(),900);
      }
    }catch(err){
      status(form,friendly(err),'bad');
      if(btn){btn.disabled=false;btn.textContent=old}
      console.warn('[signup-feedback]',err);
    }
  },true);

  console.info('[signup-feedback] v3.47.0 active');
})();
