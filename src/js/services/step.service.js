export default class Step {
  constructor(AppConstants, $http) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;

  }

  all() {
    return this._$http({
      url: this._AppConstants.api + '/admin/steps/',
      method: 'GET'
    }).then((res) => res.data);
  }

  update(step){
    return this._$http({
      url: this._AppConstants.api + '/admin/steps/' + step.id,
      method: 'PUT',
      data: step
    }).then((res) => res.data);
  }

  save(step){
    return this._$http({
      url: this._AppConstants.api + '/admin/steps/',
      method: 'POST',
      data: step
    }).then((res) => res.data);
  }

  delete(step){
    return this._$http({
      url: this._AppConstants.api + '/admin/steps/' + step.id,
      method: 'DELETE'
    }).then((res) => res.data);
  }

  new(){
    return this._$http({
      url:
      this._AppConstants.api + '/admin/steps/new',
      method: "GET"
    }).then((res) => res.data)
  }

  edit(step){
    return this._$http({
      url:
      this._AppConstants.api + '/admin/steps/' + step.id + '/edit',
      method: "GET"
    }).then((res) => res.data)
  }

}
