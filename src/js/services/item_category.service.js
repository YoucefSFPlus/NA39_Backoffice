export default class ItemCategory {
  constructor(AppConstants, $http, JWT) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;
    this._JWT = JWT


  }

  all() {
    return this._$http({ 
      url: this._AppConstants.api + '/admin/item_categories/',
      method: 'GET',
      cache:false,
      headers: {
        Authorization: this._JWT.get()
      } 
    }).then((res) => res.data);
  }

  getPhotos(id) {
    return this._$http({
      url: this._AppConstants.api + '/admin/item_categories/' + id,
      method: 'GET',
      headers: {
        Authorization: this._JWT.get()
      } 
    }).then((res) => res.data);
  }

  save(cat){
    return this._$http({
      url:  this._AppConstants.api + '/admin/item_categories',
      method: 'POST',
      data: cat
    }).then((res) => res.data)
  }

  update(cat){
    return this._$http({
      url:  this._AppConstants.api + '/admin/item_categories/' + cat.id,
      method: 'PUT',
      data: cat
    }).then((res) => res.data)
  }

  delete(cat){
    return this._$http({
      url:  this._AppConstants.api + '/admin/item_categories/' + cat.id,
      method: 'DELETE',
      data: cat
    }).then((res) => res.data)
  }
  // Retrieve a user's profile
  // get() {
  //   return this._$http({ 
  //     url: this._AppConstants.api + '/profiles/' + username,
  //     method: 'GET'
  //   }).then((res) => res.data.profile);
  // }


}