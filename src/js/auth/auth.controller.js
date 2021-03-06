class AuthCtrl {
  constructor(User, $state) {
    'ngInject';

    this._User = User;
    this._$state = $state;
    this.title = $state.current.title;
    this.authType = $state.current.name.replace('app.', '');
    this.jwtHelper

  }
  submitForm () {
    this.isSubmitting = true;

     this._User.attemptAuth(this.authType, this.formData).then(
      // Callback for success
      (res) => {
        this._$state.go('app.videos');
      },
      // Callback for failure
      (err) => {
        this.isSubmitting = false;
        this.errors = err.data.errors;
      }
    );
  }

}


export default AuthCtrl;