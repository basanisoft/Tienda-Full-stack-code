/* -------------------- INTRODUCTION -------------------- */

/* File: /web_server_root_directory/javascripts/lwc/angular_shopping_cart_spa.js.
 * Purpose: Primary JavaScript for AngularJS Shopping Cart Single Page Application (AngularJS Shopping Cart SPA).
 * Used in: angular_shopping_cart_spa.php.
 * Last reviewed/updated: 26 Jul 2017.
 * Published: 24 Jan 2017.
 * Unobtrusive: 1.) decouple HTML/JavaScript: a.) no register JavaScript event handlers in HTML via HTML attributes (eg, onload and onclick), and b.) no embed JavaScripts in HTML via HTML script element; 2.) as reasonable, decouple CSS/JavaScript. Eg, as reasonable, use JavaScript to change HTML class attribute value assignments (loose coupling), not use JavaScript to change JavaScript style object CSS property value assignments (tight coupling); and 3.) no define JavaScript variables and functions on JavaScript global scope. However, Add To Cart buttons, Shopping Navbars, and some other buttons use AngularJS ng-click directive.
 * Web browser support: IE9.0+, ED12+, FF6.0+, SF5.1.4+, CH13.0+, OP11.60+, VV1.0+. CH12.0 works but CSS checkbox and radio button critical fail. Confirmed 07 Jun 17.
 * AngularJS support: At least AngularJS 1.5.9 - 1.6.x.
 * NOTE:
 * Whole page views:
 * 1.) Shopping view.
 * 2.) Shopping Cart view.
 * 3a.) Checkout: Shipping view (Shipping view for short).
 * 3b.) Checkout: Billing view (Billing view for short).
 * 3c.) Checkout: Review Order view (Review Order view for short).
 * 3d.) Checkout: Order Confirmation view (Order Confirmation view for short).
 * These views are listed in Shopping Navbar displayed near top of each view.
 * References with first letter each work cap are to views, which may be whole page views (which include the word "view") or partial page views (which do not include the word "view"). For example, shopping cart database, Shopping Cart Summary, Shopping Cart view, and Line Items Report Form.
 * THINGS TO DO/CHECK/TEST:
 * 1.) Check into using regExp invalid characters as done in shopping_library.js.
 * 2.) Done. Test for delivery method radio buttons and Billing Address Same as the shipping address checkbox F5 (Refresh/Reload) issue. Issue not in IE9.0, FF6.0, SF5.1.4, CH8.0, OP11.60, VV1.0.
 * 3.) Done. Test if Shopping Cart view Line Items Report Form is showing validation error messages, and then if add item to cart, Line Items Report Form validation error messages should not appear again until click Shopping Cart view Update Quantities button or Checkout button.
 * 4.) Done. Test if form validation error messages are shown, go forward one more more views (not go back one or more views), and then if go back to form with validation error messages, form validation error messages should not appear again until click go forward to next view button.
 * 5.) Done. Check for obsoleted styles in javascript_angularjs_shopping_cart_spa.css.
 * ISSUES:
 * 1.) Closed. IE10.0 Shopping Cart view Line Items Report Form and Delivery Method Form display missing some table cell borders. Issue resolved by; a.) scrolling web page up/down so missing table cell borders go off viewport, and b.) changing web page size via Ctrl+/Ctrl-. Issue not resolved by; a.) changing screen resolution, or b.) changing monitors. Issue not present in IE9.0 and IE11.0. Issue apparently an IE10.0 rendering issue, not a code issue. IE10.0 is supported version of IE for Windows only on Windows Server 2012. This issue not considered important and, therefore, is closed.
 * 2.) Closed. OP11.64- apparently does not support JavaScript JSON.stringify() method indenting argument and AngularJS json filter indenting argument. This issue not considered important and, therefore, is closed.
 * 3.) Closed. CH7.0+ would be supported if checkboxes and radio buttons did not require CH13.0+. This issue not considered important and, therefore, is closed. */

/* -------------------- ANGULARJS MODULE DEFINITION -------------------- */

angular.module('shoppingCartSpaApp', ['ngMessages'])

// ---------- ANGULARJS CONTROLLER DEFINITION ----------

.controller('shoppingCartSpaCtrl', function($scope, $filter) {

 // ---------- ANGULARJS MODEL DEFINITIONS: ANGULARJS SCOPE OBJECT DATA REFERENCE PROPERTIES DEFINED AS JAVASCRIPT OBJECTS AND ARRAYS ----------

 // Database: $scope.itemsDb (aka, items database).
 // Purpose: Provides items to select from to purchase data reference. More specifically, provides data reference for; 1.) Shopping view fake search results items to shop from, and 2.) $scope.shoppingCartDb.item*Arrays, which serve as selected items to purchase database with itemName in itemNameArray serving as unique key.
 // NOTE: Used in a view; therefore, define as AngularJS $scope object property.
 $scope.itemsDb = [
  {
   itemPriKey: 1,
   itemName: "Intel Core i3-4130 Processor (3MB Cache, 3.40GHz) Haswell LGA1150 22nm Boxed",
   itemLaunchDate: "Q3'13",
   itemNumberOfCores: 2,
   itemMaxTdp: "54W",
   itemProcessorGraphics: "Intel HD Graphics 4400",
   itemModelNumber: "BX80646I34130",
   itemImage: "i3-4130_19-116-946-TS_125x135.jpg",
   itemPriceEach: 117.00
  },
  {
   itemPriKey: 2,
   itemName: "Intel Core i3-4150 Processor (3MB Cache, 3.50GHz) Haswell LGA1150 22nm Boxed",
   itemLaunchDate: "Q2'14",
   itemNumberOfCores: 2,
   itemMaxTdp: "54W",
   itemProcessorGraphics: "Intel HD Graphics 4400",
   itemModelNumber: "BX80646I34150",
   itemImage: "i3-4150_19-116-995-TS_125x135.jpg",
   itemPriceEach: 117.00
  },
  {
   itemPriKey: 3,
   itemName: "Intel Core i3-4160 Processor (3MB Cache, 3.60GHz) Haswell LGA1150 22nm Boxed",
   itemLaunchDate: "Q3'14",
   itemNumberOfCores: 2,
   itemMaxTdp: "54W",
   itemProcessorGraphics: "Intel HD Graphics 4400",
   itemModelNumber: "BX80646I34160",
   itemImage: "i3-4160_19-117-447-01_125x135.jpg",
   itemPriceEach: 117.00
  },
  {
   itemPriKey: 4,
   itemName: "Intel Core i3-4170 Processor (3MB Cache, 3.70GHz) Haswell LGA1150 22nm Boxed",
   itemLaunchDate: "Q1'15",
   itemNumberOfCores: 2,
   itemMaxTdp: "54W",
   itemProcessorGraphics: "Intel HD Graphics 4400",
   itemModelNumber: "BX80646I34170",
   itemImage: "i3-4170_19-117-543-02_125x135.jpg",
   itemPriceEach: 117.00
  }
 ];

 // Database: $scope.deliveryMethodsDb (aka, delivery method database).
 // Purpose: Provides delivery method data reference. More specifically, provides data reference for; 1.) Shopping Cart view Delivery Method Form, and 2.) $scope.shoppingCartDb delivery method properties.
 // NOTE: Used in a view; therefore, define as AngularJS $scope object property.
 $scope.deliveryMethodsDb = [
  {
   deliveryMethodPriKey: 1,
   deliveryMethodName: "Free Super Saver (4 - 7 Business Days)",
   deliveryMethodPriceEach: 0.00
  },
  {
   deliveryMethodPriKey: 2,
   deliveryMethodName: "3 Business Days",
   deliveryMethodPriceEach: 5.99
  },
  {
   deliveryMethodPriKey: 3,
   deliveryMethodName: "2 Business Days",
   deliveryMethodPriceEach: 19.99
  },
  {
   deliveryMethodPriKey: 4,
   deliveryMethodName: "Next Business Day",
   deliveryMethodPriceEach: 29.99
  }
 ];

 // Database: $scope.regExpDb (aka, regular expression database).
 // Purpose: Provides JavaScript regular expression data type pattern data reference and property value conversion data reference. More specifically, provides data reference for; 1.) AngularJS ng-pattern directives, and 2.) converting $scope.billingDb.creditCardNumber property value to $scope.billingDb.creditCardNumberHidden property value.
 // NOTE: Used in a view; therefore, define as AngularJS $scope object property.
 $scope.regExpDb = {
  allNameTypesAndCity: /[a-zA-Z]+/, // a-zA-Z repeated 1 or more times. Name types include first name, last name, full name, credit cardholder name.
  address: /[a-zA-Z0-9]+/, // a-zA-Z0-9 repeated 1 or more times.
  address2Optional: /[a-zA-Z0-9]*/, // a-zA-Z0-9 repeated 0 or more times. 0 times means empty is valid; therefore, optional.
  quantity: /^[0-9]+$/, // Digit repeated 1 or more times.
  quantityOptional: /^[0-9 ]*$/, // Digit and/or space repeated 0 or more times. 0 times means empty is valid; therefore, optional.
  state: /^[a-zA-Z]{2}$/, // a-zA-Z 2 consecutive.
  zipCode: /^\d{5}$/, // digit 5 consecutive.
  phoneNumber: /^\d{10}$|^\d{3}-\d{3}-\d{4}$/, // digit 10 consecutive or digit 3 consecutive + dash + digit 3 consecutive + dash + digit 4 consecutive.
  creditCardNumber: /^\d{16}$|^\d{4} \d{4} \d{4} \d{4}$/, // digit 16 consecutive or digit 4 consecutive + space + digit 4 consecutive + space + digit 4 consecutive + space + digit 4 consecutive.
  hideCreditCardNumber: function(creditCardNumber){ // Replace credit card number with asterisks (*) except for last four numbers.
   var creditCardNumberLength = creditCardNumber.length;
   switch (creditCardNumberLength){
    case 16:
     var creditCardNumberHidden = creditCardNumber.replace(/^\d{12}/, "************");
     break;
    case 19:
     var creditCardNumberHidden = creditCardNumber.replace(/^\d{4} \d{4} \d{4} /, "**** **** **** ");
     break;
    default:
     alert("There was a problem processing the request. Error report - File: angular_shopping_cart_spa.js. Module: shoppingCartSpaApp. Controller: shoppingCartSpaCtrl. Object: $scope.regExpDb. Method: hideCreditCardNumber. Line: 196. Issue: creditCardNumberLength not matched by switch cases.");
   }
   return creditCardNumberHidden;
  },
  creditCardExpirationMonth: /^\d{2}$/, // digit 2 consecutive.
  creditCardExpirationYear: /^\d{4}$/, // digit 4 consecutive.
  creditCardSecurityCode: /^\d{3}$/, // digit 3 consecutive.
  emailAddress: /^\S+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/ // non-whitespace repeated 1 or more times + at + a-zA-Z0-9 repeated 1 or more times + dot + a-zA-Z0-9 repeated 1 or more times. Meant to mirror IE11.0 input type="email" requirement.
 };

 // Database: $scope.monthsByTwoNumbersDb (aka, months by two numbers database).
 // Purpose: Provides months by two numbers data reference. More specifically, provides data reference for AngularJS ng-options directive.
 // NOTE: Used in a view; therefore, define as AngularJS $scope object property.
 $scope.monthsByTwoNumbersDb = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "12"];

 // Database: $scope.creditCardExpirationYearsDb (aka, credit card expiration years database).
 // Purpose: Provides credit card expiration year data reference. More specifically, provides data reference for AngularJS ng-options directive.
 // NOTE: Used in a view; therefore, define as AngularJS $scope object property.
 $scope.creditCardExpirationYearsDb = ["2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028"];

 // Database: $scope.fiftyStatesByTwoLettersDb (aka, fifty states by two letters database).
 // Purpose: Provides fifty states (no DC and PR) by two letters data reference. More specifically, provides data reference for AngularJS ng-options directive.
 // NOTE: Used in a view; therefore, define as AngularJS $scope object property.
 $scope.fiftyStatesByTwoLettersDb = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];

 // Database: $scope.shoppingCartDb (aka, shopping cart database).
 // Purpose: Stores and provides Shopping Cart view data reference.
 // NOTE:
 // Used in a view; therefore, define as AngularJS $scope object property.
 // To see this database with actual data, see dummy shopping cart database below.
 // $scope.shoppingCartDb.itemNameArray, $scope.shoppingCartDb.itemQuantityArray, $scope.shoppingCartDb.itemPriceEachArray, and/or $scope.shoppingCartDb.itemPriceLineArray are referred to as $scope.shoppingCartDb.item*Arrays and shopping cart database item*Arrays.
 // $scope.shoppingCartDb.item*Arrays serve as selected items to purchase database with itemName in itemNameArray serving as unique key.
 // If $scope.shoppingCartDb.item*Arrays contain data, then items are selected for purchase and it is said that shopping cart database item*Arrays are full. If $scope.shoppingCartDb.item*Arrays do not contain data, then items are not selected for purchase and it is said that shopping cart database item*Arrays are empty.
 $scope.shoppingCartDb = {
  itemNameArray: [], // Array of Strings.
  itemQuantityArrayTemp: [], // Array of Numbers.
  itemQuantityArray: [], // Array of Numbers.
  itemPriceEachArray: [], // Array of Numbers.
  itemPriceLineArray: [], // Array of Numbers.
  allItemsQuantity: 0, // Number. Number of all items (not number of different items) selected for purchase.
  allItemsPrice: 0, // Number. Price of all items selected for purchase.
  deliveryMethod: "", // String.
  deliveryMethodPriceEach: 0, // Number.
  allItemsAndDeliveryMethodPrice: 0, // Number.
  isShoppingCartFull: false, // Boolean.
  isLineItemsReportFormValid: true, // Boolean. Requires true default value; otherwise, AngularJS validation error messages shown by default before clicking button.
  isRemoveItemCheckboxCheckedArray: [], // Array of Booleans.
  isDeliveryMethodFormValid: true // Boolean. Requires true default value; otherwise, AngularJS validation error messages shown by default before clicking button.
 };

// Dummy shopping cart database. Passes Shopping Cart view validations. To use, uncomment out this block and comment out block above. Useful for testing.
/*
 $scope.shoppingCartDb = {
  itemNameArray: ["Intel Core i3-4130 Processor (3MB Cache, 3.40GHz) Haswell LGA1150 22nm Boxed", "Intel Core i3-4150 Processor (3MB Cache, 3.50GHz) Haswell LGA1150 22nm Boxed", "Intel Core i3-4160 Processor (3MB Cache, 3.60GHz) Haswell LGA1150 22nm Boxed", "Intel Core i3-4170 Processor (3MB Cache, 3.70GHz) Haswell LGA1150 22nm Boxed", "Intel Core i3-4330 Processor (4MB Cache, 3.50GHz) Haswell LGA1150 22nm Boxed"],
  itemQuantityArrayTemp: [],
  itemQuantityArray: [1, 2, 3, 4, 5],
  itemPriceEachArray: [117, 117, 117, 117, 147],
  itemPriceLineArray: [117, 234, 351, 468, 735],
  allItemsQuantity: 15,
  allItemsPrice: 1905,
  deliveryMethod: "3 Business Days",
  deliveryMethodPriceEach: 5.99,
  allItemsAndDeliveryMethodPrice: 1910.99,
  isShoppingCartFull: true,
  isLineItemsReportFormValid: true,
  isRemoveItemCheckboxCheckedArray: [false, false, false, false, false],
  isDeliveryMethodFormValid: true
 };
*/

 // Database: $scope.shippingDb (aka, shipping database).
 // Purpose: Stores and provides Shipping view data reference.
 // NOTE:
 // Used in a view; therefore, define as AngularJS $scope object property.
 // To see this database with actual data, see dummy shipping database below.
 $scope.shippingDb = {
  firstName: "", // String.
  lastName: "", // String.
  fullName: "", // String.
  address: "", // String.
  address2: "", // String.
  city: "", // String.
  state: "", // String.
  zipCode: "", // String.
  phoneNumber: "", // String.
  emailAddress: "", // String.
  emailAddressConfirm: "", // String.
  isShippingFormValid: true // Boolean. Requires true default value; otherwise, AngularJS validation error messages shown by default before clicking button.
 };

// Dummy shipping database. Passes Shipping view validation. To use, uncomment out this block and comment out block above. Useful for testing.
/*
 $scope.shippingDb = {
  firstName: "Firstname",
  lastName: "Lastname",
  fullName: "Firstname Lastname",
  address: "Address 1111 Main Street",
  address2: "Address2 Apt 1A",
  city: "City A",
  state: "AL",
  zipCode: "11111",
  phoneNumber: "111-111-1111",
  emailAddress: "a@a.com",
  emailAddressConfirm: "a@a.com",
  isShippingFormValid: true
 };
*/

 // Database: $scope.billingDb (aka, billing database).
 // Purpose: Stores and provides Billing view data reference.
 // NOTE:
 // Used in a view; therefore, define as AngularJS $scope object property.
 // To see this database with actual data, see dummy billing database below.
 $scope.billingDb = {
  creditCardholderNameTemp: "", // String.
  creditCardholderName: "", // String.
  creditCardNumber: "", // String.
  creditCardNumberHidden: "", // String.
  creditCardExpirationMonth: "", // String.
  creditCardExpirationYear: "", // String.
  creditCardSecurityCode: "", // String.
  addressTemp: "", // String.
  address: "", // String.
  address2Temp: "", // String.
  address2: "", // String.
  cityTemp: "", // String.
  city: "", // String.
  stateTemp: "", // String.
  state: "", // String.
  zipCodeTemp: "", // String.
  zipCode: "", // String.
  phoneNumberTemp: "", // String.
  phoneNumber: "", // String.
  isCreditCardFormValid: true, // Boolean. Requires true default value; otherwise, AngularJS validation error messages shown by default before clicking button.
  isBillingAddressSameAsTheShippingAddressCheckboxChecked: true, // Boolean. Refers to Billing view "Billing Address: Same as the shipping address" checkbox. Requires checked default value; therefore, set to Boolean true.
  isBillingAddressFormValid: true // Boolean. Requires true default value; otherwise, AngularJS validation error messages shown by default before clicking button.
 };

// Dummy billing database. Passes Billing view validation. To use, uncomment out this block and comment out block above. Useful for testing. Assumes: 1.) shipping database fullname and billing database creditCardholderName are different; 2.) shipping database address and billing database address are different; and 3.) billing database creditCardholderName and billing database address were entered, Billing view Review Order button was clicked, and then returned to Billing view.
/*
 $scope.billingDb = {
  creditCardholderNameTemp: "",
  creditCardholderName: "Cardholder Name",
  creditCardNumber: "1111 1111 1111 1111",
  creditCardNumberHidden: "",
  creditCardExpirationMonth: "01",
  creditCardExpirationYear: "2020",
  creditCardSecurityCode: "111",
  addressTemp: "",
  address: "Address 9999 Main Street",
  address2Temp: "",
  address2: "Address2 Apt 9Z",
  cityTemp: "",
  city: "City Z",
  stateTemp: "",
  state: "WY",
  zipCodeTemp: "",
  zipCode: "99999",
  phoneNumberTemp: "",
  phoneNumber: "999-999-9999",
  isCreditCardFormValid: true,
  isBillingAddressSameAsTheShippingAddressCheckboxChecked: true,
  isBillingAddressFormValid: true
 };
*/

 // Database: $scope.orderObjectDb (aka, order object database).
 // Purpose: Stores and provides order data reference as a JavaScript object.
 // NOTE:
 // Used in a view; therefore, define as AngularJS $scope object property.
 // Generated by $scope.generateOrderObjectDb().
 // Serialized to $scope.orderObjectDbAsJsonString by $scope.generateOrderObjectDb().
 $scope.orderObjectDb = {
  allItemsQuantity: "",
  allItemsPrice: "",
  deliveryMethod: "",
  deliveryMethodPriceEach: "",
  allItemsAndDeliveryMethodPrice: "",
  items: [],
  shippingInformation: {
   fullName: "",
   address: "",
   address2: "",
   city: "",
   state: "",
   zipCode: "",
   phoneNumber: "",
   emailAddress: ""
  },
  billingInformation: {
   creditCardholderName: "",
   creditCardNumber: "",
   creditCardExpirationMonth: "",
   creditCardExpirationYear: "",
   creditCardSecurityCode: "",
   address: "",
   address2: "",
   city: "",
   state: "",
   zipCode: "",
   phoneNumber: ""
  }
 };

 // Database: $scope.orderObjectDbAsJsonString.
 // Purpose: Stores and provides $scope.orderObjectDb as JSON string.
 // NOTE:
 // Used in a view; therefore, define as AngularJS $scope object property.
 // Generated from $scope.orderObjectDb by $scope.generateOrderObjectDb().
 $scope.orderObjectDbAsJsonString = {};

 // ---------- METHODS NOT USED IN VIEWS ----------

 // Method: validateForm(database, form).
 // Purpose: Validate form and place focus on first invalid form element. More specifically, validate form, alert user form is invalid, place focus on first invalid form element, show form element validation error message, and both set a property value and return a value to indicate that form is valid/invalid.
 // NOTE:
 // Not used in a view; therefore, do not define as AngularJS $scope object property.
 // database argument is assigned the view database as a string value. Possible values are "shippingDb", "shoppingCartDb", and "billingDb".
 // form argument is assigned the form element name attribute value as a string value. Possible values are "lineItemsReportForm", "deliveryMethodForm", "shippingForm", "creditCardForm", and "billingAddressForm".
 // On setting a property value: Upon an event, such as a button click, evaluate $scope[form].$valid/$invalid expressions and set a $scope[database][formName} property value that is used in AngularJS ng-hide directives to show AngularJS form validation error messages only after the event, such as a button click. This is opposed to evaluating $scope[form].$valid/$invalid expressions directly in AngularJS ng-hide directives to show AngularJS form validation error messages in real time.
 // On returning a value: Returning a value is for use in JavaScript flow-control statements.
 // On both setting a property value and returning a value: There is no requirement to use both values.
 validateForm = function(database, form){
  // Convert "form" string to "isFormValid" string. Get "form" string first character, convert to uppercase, and set on local variable.
  var formCharZeroToUpperCase = form.charAt(0).toUpperCase();
  // Get "form" string characters two through end and set on local variable.
  var formCharsOneThroughEnd = form.slice(1);
  // Concatenate "isFormValid" string and set on local variable.
  var formName = "is" + formCharZeroToUpperCase + formCharsOneThroughEnd + "Valid";
  // Determine if form is valid. Because "form" is string, use bracket ([]) notation.
  if ($scope[form].$valid){
   // Form is valid. Set $scope[database][formName] property value to Boolean true to indicate that form is valid. Because "database" and "formName" are strings, set property value using bracket ([]) notation. Can get property value using bracket ([]) notation $scope[database][formName] or dot (.) notation $scope.database.formName.
   $scope[database][formName] = true;
   // Return Boolean true value to indicate that form is valid. Because return statement exits if statement, place return at end of if statement.
   return true;
  } else if ($scope[form].$invalid){
   // Form is invalid. Alert user form is invalid.
   alert("Please resolve the indicated item(s).");
   // Prepare to place focus on first invalid form element. Get reference to first invalid form element using JavaScript querySelector() method with .ng-invalid CSS class selector argument. AngularJS ng-model directive adds AngularJS .ng-invalid/.ng-valid CSS class selectors to invalid/valid form input elements and select elements.
   var firstInvalidFormElement = document[form].querySelector(".ng-invalid");
   // Place focus on first invalid form element using JavaScript focus() method. Apparently does not work for radio buttons.
   firstInvalidFormElement.focus();
   // Scroll form element parent node into view. This positions form element label/name into view. A convenience. Otherwise, user might have to scroll up to see label/name of invalid form element.
   firstInvalidFormElement.parentNode.scrollIntoView(true);
   // Set $scope[database][formName] property to Boolean false value to indicate that form is invalid. Because "database" and "formName" are strings, set property value using bracket ([]) notation. Can get property value using bracket ([]) notation $scope[database][formName] or dot (.) notation $scope.database.formName.
   $scope[database][formName] = false;
   // Return Boolean false value to indicate that form is invalid. Because return statement exits else if statement, place return at end of else if statement.
   return false;
  } else {
   alert("There was a problem processing the request. Error report - File: angularjs_shopping_cart_spa.js. Module: shoppingCartSpaApp. Controller: shoppingCartSpaCtrl. Method: validateForm(). Line: 445. Issue: $scope[form] object does not have .$valid or $.invalid property.");
  }
 };

 // Method: returnObjectIndexInArrayByPropertyAndValue(array, property, value).
 // Purpose: Return index of object in an array of objects using object property (aka, key) and value. For example, if $scope.myArray = [{itemName: "abc"},{itemName: "def"},{itemName: "ghi"}], then returnObjectIndexInArrayByPropertyAndValue($scope.myArray, "itemName", "def") returns 1.
 // NOTE: Not used in a view; therefore, do not define as AngularJS $scope object property.
 // array argument is assigned the array.
 // property argument is assigned the object property to lookup as a string value.
 // value argument is assigned the object property value to lookup.
 returnObjectIndexInArrayByPropertyAndValue = function(array, property, value){
  // Iterate over array objects.
  for (var i = 0; i < array.length; i++){
   // Determine if object i has property assigned value. Because "property" is string, use bracket ([]) notation.
   if (array[i][property] === value){
    // Object i has property assigned value. Return value of i.
    return i;
   }
  }
  // No objects have property assigned value. Return -1.
  return -1;
 };

 // ---------- PROPERTIES USED IN MULTIPLE VIEWS ----------

 // Property: $scope.view.
 // Purpose: Set AngularJS Shopping Cart SPA default view.
 // NOTE:
 // Used in a view; therefore, define as AngularJS $scope object property.
 // The AngularJS Shopping Cart SPA consists of one HTML document with multiple views. There is no inherent default view; therefore, set default view.
 // To display a particular view without having to click through previous views, set view to "shopping", "shoppingCart", "shipping", "billing", "reviewOrder", or "orderConfirmation" string value. Useful for testing.
 $scope.view = "shopping";

 // ---------- METHODS USED IN MULTIPLE VIEWS ----------

 // Method: $scope.changeViewTo(view).
 // Purpose: Change view. More specifically, change view to passed view argument value and position Shopping Cart Summary to top of viewport. Called by AngularJS ng-click directive in; 1.) Shopping Navbars, 2.) Continue Shopping buttons, and 3.) Review Order view Shopping Cart edit, Shipping Information edit, and Billing Information edit buttons. Called by: 1.) $scope.goToShoppingCart(), which is called by: a.) AngularJS ng-click directive in Shopping Cart Summary button; b.) AngularJS ng-click directive Shopping view Shopping Cart button; and c.) $scope.addItemToCart(), which is called by AngularJS ng-click directive in Shopping view Add To Cart buttons; 2.) $scope.processShoppingCart_checkout(), which is called by AngularJS ng-click directive in Shopping Cart view Checkout button; 3.) $scope.processShipping_goToBilling(), which is called by AngularJS ng-click directive in Shipping view Billing button; 4.) $scope.processBilling_goToReviewOrder(), which is called by AngularJS ng-click directive in Billing view Review Order button; and 5.) $scope.placeFakeOrder(), which is called by AngularJS ng-click directive in Review Order view Place Fake Order/Order Confirmation button.
 // NOTE:
 // Used in a view; therefore, define as AngularJS $scope object property.
 // view argument is assigned the view to change the to view to as a string value. Possible values are "shopping", "shoppingCart", "shipping", "billing", "reviewOrder", and "orderConfirmation".
 $scope.changeViewTo = function(view){
  // Prepare to position Shopping Cart Summary button to top of viewport. Get reference to Shopping Cart Summary button using id attribute value and set on local variable. Shopping Cart Summary button is wrapped by p element with id='shoppingCartSummaryBtnId' attribute.
  shoppingCartSummaryBtn = document.getElementById("shoppingCartSummaryBtnId");
  // Position Shopping Cart Summary button to top of viewport using JavaScript scrollIntoView() method with true argument. true argument means scroll top of element to top of viewport.
  shoppingCartSummaryBtn.scrollIntoView(true);
  // Change view to passed view argument value.
  $scope.view = view;
 };

 // Method: $scope.goToShoppingCart().
 // Purpose: Determine if shopping cart database item*Arrays contain data and change view to Shopping Cart. More specifically, run $scope.isShoppingCartFull() and run $scope.changeViewTo("shoppingCart"). Called by; 1.) AngularJS ng-click directive in Shopping Cart Summary button, and 2.) AngularJS ng-click directive in Shopping view Shopping Cart button.
 // NOTE: Used in a view; therefore, define as AngularJS $scope object property.
 $scope.goToShoppingCart = function(){
  // Determine if shopping cart database item*Arrays contain data.
  $scope.isShoppingCartFull();
  // Change view to Shopping Cart.
  $scope.changeViewTo("shoppingCart");
 };

 // ---------- METHODS USED IN SHOPPING VIEW ANG SHOPPING CART VIEW ----------

 // Method: $scope.updateShoppingCartSummary().
 // Purpose: Update Shopping Cart Summary. More specifically, get/calculate/set the following property values displayed in Update Shopping Cart Summary and elsewhere (see NOTE below); 1.) $scope.shoppingCartDb.allItemsQuantity, 2.) $scope.shoppingCartDb.allItemsPrice, and 3.) $scope.shoppingCartDb.allItemsAndDeliveryMethodPrice. Called by: 1.) $scope.addItemToCart(), which is called by AngularJS ng-click directive in Shopping view Add To Cart buttons; 2.) $scope.updateShoppingCartQuantities(), which is called by: a.) AngularJS ng-click directive in Shopping Cart view Update Quantities button; and b.) $scope.processShoppingCart_checkout(), which is called by AngularJS ng-click directive in Shopping Cart view Checkout button; and 3.) $scope.addDeliveryMethod(), which is called by AngularJS ng-click directive in Shopping Cart view Delivery Method Form radio buttons.
 // NOTE:
 // Used in a view; therefore, define as AngularJS $scope object property.
 // Shopping Cart Summary: 1.) is persistent view located top right above Shopping Navbars; 2.) displays Font Awesome shopping cart icon: $0.00* (0** items) + $0.00*** shipping = $0.00**** total, where * is $scope.shoppingCartDb.allItemsPrice, ** is $scope.shoppingCartDb.allItemsQuantity, *** is $scope.shoppingCartDb.deliveryMethodPriceEach, and **** is $scope.shoppingCartDb.allItemsAndDeliveryMethodPrice; and 3.) click Shopping Cart Summary changes view to Shopping Cart.
 // Shopping Cart Summary displays $scope.shoppingCartDb.deliveryMethodPriceEach, but does not set $scope.shoppingCartDb.deliveryMethodPriceEach. $scope.addDeliveryMethod() sets $scope.shoppingCartDb.deliveryMethodPriceEach.
 // Shopping Cart Summary and Review Order view display $scope.shoppingCartDb.allItemsQuantity, $scope.shoppingCartDb.allItemsPrice, and $scope.shoppingCartDb.allItemsAndDeliveryMethodPrice. Shopping Cart displays $scope.shoppingCartDb.allItemsPrice and $scope.shoppingCartDb.allItemsAndDeliveryMethodPrice.
 $scope.updateShoppingCartSummary = function(){
  // Because of += operator below, set $scope.shoppingCartDb.allItemsQuantity to zero each time this method is run.
  $scope.shoppingCartDb.allItemsQuantity = 0;
  // Because of += operator below, set $scope.shoppingCartDb.allItemsPrice to zero each time this method is run.
  $scope.shoppingCartDb.allItemsPrice = 0;
  // Get number of different items (not number of items) selected for purchase from $scope.shoppingCartDb.itemNameArray using JavaScript length property and set on local variable. The length property of any of the $scope.shoppingCartDb.item*Arrays represents the number of different items (not number of items) selected for purchase. Here, the length property of the $scope.shoppingCartDb.itemNameArray is used.
  var itemArrayLength = $scope.shoppingCartDb.itemNameArray.length;
  // Iterate over items selected for purchase.
  for (var i = 0; i < itemArrayLength; i++){
   // Prepare to calculate all item quantity. For each item, get item quantity field value from $scope.shoppingCartDb.itemQuantityArray using for loop i variable as item index and set on local variable.
   var itemQuantity = $scope.shoppingCartDb.itemQuantityArray[i]; // Number.
   // Calculate all items quantity by adding each itemQuantity and set on $scope.shoppingCartDb.allItemsQuantity.
   $scope.shoppingCartDb.allItemsQuantity += itemQuantity; // Number.
   // Prepare to calculate all items price. For each item, get item price line from $scope.shoppingCartDb.itemPriceLineArray using for loop i variable as item index and set on local variable.
   var itemPriceLine = $scope.shoppingCartDb.itemPriceLineArray[i]; // Number.
   // Calculate all items price by adding each itemPriceLine and set on $scope.shoppingCartDb.allItemsPrice.
   $scope.shoppingCartDb.allItemsPrice += itemPriceLine; // Number.
  }
  // Calculate all items and delivery method price by adding $scope.shoppingCartDb.allItemsPrice and $scope.shoppingCartDb.deliveryMethodPriceEach and set on $scope.shoppingCartDb.allItemsAndDeliveryMethodPrice.
  $scope.shoppingCartDb.allItemsAndDeliveryMethodPrice = $scope.shoppingCartDb.allItemsPrice + $scope.shoppingCartDb.deliveryMethodPriceEach; // Number.
 };

 // Method: $scope.isShoppingCartFull().
 // Purpose: Determine if shopping cart database item*Arrays contain data and insert values into Line Items Report Form item quantity fields. More specifically, determine if $scope.shoppingCartDb.item*Arrays contains data, if no, set a property value and return a value to indicate that shopping cart database item*Arrays are empty, if yes, insert values into Line Items Report Form item quantity fields by setting all items from $scope.shoppingCartDb.itemsQuantityArray on $scope.shoppingCartDb.itemsQuantityArrayTemp (ie, copy/clone array), and set a property value and return a value to indicate that shopping cart database item*Arrays are full. Called by: 1.) $scope.addItemToCart(), which is called by AngularJS ng-click directive in Shopping view Add To Cart buttons; 2.) $scope.goToShoppingCart(), which is called by; a.) AngularJS ng-click directive in Shopping Cart Summary button, and b.) AngularJS ng-click directive in Shopping view Shopping Cart button; and 3.) $scope.updateShoppingCartQuantities(), which is called by: a.) AngularJS ng-click directive in Shopping Cart view Update Quantities button, and b.) $scope.processShoppingCart_checkout(), which is called by AngularJS ng-click directive in Shopping Cart view Checkout button.
 // NOTE:
 // Used in a view; therefore, define as AngularJS $scope object property.
 // Line Items Report Form displays user selected items to purchase in line item format that allows user to; 1.) remove items to purchase via remove item checkboxes, and 2.) change items quantity to purchase via item quantity fields.
 // Must run before changing view to Shopping Cart because $scope.shoppingCartDb.isShoppingCartFull property value is used in Shopping Cart view AngularJS ng-show/ng-hide directives. $scope.shoppingCartDb.isShoppingCartFull property value also used in Review Order view AngularJS ng-show/ng-hide directives. return value is used in $scope.updateShoppingCartQuantities().
 // $scope.shoppingCartDb.itemNameArray, $scope.shoppingCartDb.itemQuantityArray, $scope.shoppingCartDb.itemPriceEachArray, and/or $scope.shoppingCartDb.itemPriceLineArray are referred to as $scope.shoppingCartDb.item*Arrays and shopping cart database item*Arrays.
 // $scope.shoppingCartDb.item*Arrays serve as selected items to purchase database with itemName in itemNameArray serving as unique key.
 // If $scope.shoppingCartDb.item*Arrays contain data, then items are selected for purchase and it is said that shopping cart database item*Arrays are full. If $scope.shoppingCartDb.item*Arrays do not contain data, then items are not selected for purchase and it is said that shopping cart database item*Arrays are empty.
 // If Line Items Report Form item quantity field input elements use AngularJS ng-model='shoppingCartDb.itemQuantityArray[$index]' directives, the following scenario results in undesired behaviors. Scenario: 1.) in Shopping view add first item listed to cart, 2.) go back to Shopping view and add second item listed to cart, 3.) in Shopping Cart view Line Items Report Form change first item quantity field to 3 and second item quantity field to 5 and do not click Update Quantities button or Checkout button, and 4.) go back to Shopping view and add another second item listed to cart. Undesired behaviors: 1.) Shopping Cart Summary shows 0351 items (treating numbers like strings), 2.) Line Items Report Form shows first item quantity 3 with item line price $117 (quantity/item price line mismatch), 3.) Line Items Report Form shows second item quantity 51 (treating numbers like strings) with item line price $5967, etc. Desired behaviors: 1.) the only time changes to Line Items Report Form item quantity field values are to be saved/accepted is when user explicitly clicks Shopping Cart view Update Quantities button or Checkout button, not when user simply changes an item quantity field value; 2.) Shopping Cart Summary and Line Items Report Form item quantity fields need to treat numbers like Number type values, not String type values. Cause of undesired behaviors: AngularJS ng-model='shoppingCartDb.itemQuantityArray[$index]' directive. When change Line Items Report Form item quantity field (view) values: 1.) AngularJS ng-model='shoppingCartDb.itemQuantityArray[$index]' directive two way data binding automatically updates the $scope.shoppingCartDb.itemQuantityArray[$index] (model) property values; and 2.) the item quantity field number values change from Number type value to String type value, meaning that apparently AngularJS ng-model directive does not maintain/respect value types. Solution: 1.) Have Line Items Report Form item quantity field input elements use ng-model='shoppingCartDb.itemQuantityArrayTemp[$index]' directives (notice Temp), not ng-model='shoppingCartDb.itemQuantityArray[$index]' directives (notice no temp), and have initial $scope.shoppingCartDb.itemQuantityArrayTemp values (notice Temp) copied from $scope.shoppingCartDb.itemQuantityArray (notice no temp). This way: a.) changes to Line Items Report Form item quantity field values are set on $scope.shoppingCartDb.itemQuantityArrayTemp (notice Temp), not $scope.shoppingCartDb.itemQuantityArray (notice no temp); b.) when click Shopping Cart view Update Quantities button or Checkout button, set $scope.shoppingCartDb.itemQuantityArrayTemp[$index] values (notice Temp) on $scope.shoppingCartDb.itemQuantityArray[$index] (notice no temp); and c.) in Shopping Cart view if change Line Items Report Form item quantity field values and do not click Update Quantities button or Checkout button, and then go back to Shopping view and add another item to cart, disregard the $scope.shoppingCartDb.itemQuantityArrayTemp[$index] values (notice Temp), add 1 to selected item quantity in $scope.shoppingCartDb.itemQuantityArray (notice no temp), and copy $scope.shoppingCartDb.itemQuantityArray[$index] values (notice no temp) to $scope.shoppingCartDb.itemQuantityArrayTemp[$index] values (notice temp) for display in Line Items Report Form via ng-model='shoppingCartDb.itemQuantityArrayTemp[$index]' directives (notice Temp). 2.) in Shopping Cart view Line Items Report Form if change item quantity field temp values and click Update Quantities button or Checkout button, run JavaScript Number() casting function on item quantity field temp values before setting them on $scope.shoppingCartDb.itemQuantityArray. This way when changing Line Items Report Form item quantity field temp value changes value from Number type value to String type value, the String type value is converted back to Number type value and a Number type value, not a String type value, is set on $scope.shoppingCartDb.itemQuantityArray, which resolves the treating numbers like strings undesired behavior resulting from AngularJS ng-model directive apparently not maintaining/respecting value types.
 // Each item in Line Items Report Form is generated by AngularJS ng-repeat='itemName in shoppingCartDb.itemNameArray' directive. Each item has item quantity field. Each item quantity field input element has AngularJS ng-model='shoppingCartDb.itemQuantityArrayTemp[$index]' directive (notice Temp). Because of item quantity field input element AngularJS ng-model='shoppingCartDb.itemQuantityArrayTemp[$index]' directive, values set on $scope.shoppingCartDb.itemQuantityArrayTemp (notice Temp) are inserted into Line Items Report Form item quantity fields. The values inserted into item quantity fields are referred to as the item quantity field temp values (notice temp). In this $scope.isShoppingCartFull() method, all items from $scope.shoppingCartDb.itemQuantityArray (notice no temp) are set on $scope.shoppingCartDb.itemQuantityArrayTemp (notice Temp), which inserts them into Line Items Report Form item quantity fields. In $scope.updateShoppingCartQuantities() method, when click Shopping Cart view Update Quantities button or Checkout button, Line Items Report Form item quantity field temp values are read from $scope.shoppingCartDb.itemQuantityArrayTemp (notice temp), and $scope.shoppingCartDb.item*Arrays are edited accordingly, which means updating items quantity in $scope.shoppingCartDb.itemQuantityArray and items price line in $scope.shoppingCartDb.itemPriceLineArray per Line Items Report Form item quantity field temp values.
 // JavaScript copy/clone array speed test: Cloning Arrays Revision 3 of this test case created by on 2/2/2014 http://jsperf.com/cloning-arrays/3.
 $scope.isShoppingCartFull = function(){
  // Get number of different items (not number of items) selected for purchase from $scope.shoppingCartDb.itemNameArray using JavaScript length property and set on local variable. The length property of any of the $scope.shoppingCartDb.item*Arrays represents the number of different items (not number of items) selected for purchase. Here, the length property of the $scope.shoppingCartDb.itemNameArray is used.
  var itemArrayLength = $scope.shoppingCartDb.itemNameArray.length;
  // Determine if shopping cart database item*Arrays contain data using item array length.
  if (itemArrayLength === 0){
   // Shopping cart database item*Arrays do not contain data. Set $scope.shoppingCartDb.isShoppingCartFull property value to Boolean false to indicate that shopping cart database item*Arrays are empty.
   $scope.shoppingCartDb.isShoppingCartFull = false;
   // Return Boolean true value to indicate that shopping cart database item*Arrays are empty. Because return statement exits if statement, place return at end of if statement.
   return false; // To $scope.updateShoppingCartQuantities().
  } else {
   // Shopping cart database item*Arrays contain data. Insert values into Line Items Report Form item quantity fields. Each item in Line Items Report Form is generated by AngularJS ng-repeat='itemName in shoppingCartDb.itemNameArray' directive. Each item has item quantity field. Each item quantity field input element has AngularJS ng-model='shoppingCartDb.itemQuantityArrayTemp[$index]' directive (notice Temp). Values set on $scope.shoppingCartDb.itemQuantityArrayTemp (notice Temp) are inserted into Line Items Report Form item quantity fields. The values inserted into item quantity fields are referred to as the item quantity field temp values (notice temp). Set all items from $scope.shoppingCartDb.itemQuantityArray (notice no temp) on $scope.shoppingCartDb.itemQuantityArrayTemp (notice Temp) using JavaScript slice() method with 0 as only argument. 0 as only argument means set items from item index 0 to end (ie, copy/clone array).
   $scope.shoppingCartDb.itemQuantityArrayTemp = $scope.shoppingCartDb.itemQuantityArray.slice(0);
   // Set $scope.shoppingCartDb.isShoppingCartFull property value to Boolean true to indicate that shopping cart database item*Arrays are full.
   $scope.shoppingCartDb.isShoppingCartFull = true;
   // Return Boolean true value to indicate that shopping cart database item*Arrays are full. Because return statement exits else statement, place return at end of else statement.
   return true; // To $scope.updateShoppingCartQuantities().
  }
 };

 // ---------- METHODS USED IN SHOPPING VIEW ----------

 // Method: $scope.addItemToCart(itemName).
 // Purpose: Add item to shopping cart database item*Arrays, update Shopping Cart Summary, determine if shopping cart database item*Arrays contain data, and change view to Shopping Cart. More specifically, get item values from $scope.itemsDb using itemName, determine if shopping cart database item*Arrays contain data, if yes, set item values on $scope.shoppingCartDb.item*Arrays, if no, update item quantity on $scope.shoppingCartDb.itemQuantityArray and update item price line on $scope.shoppingCartDb.itemPriceLineArray, run $scope.updateShoppingCartSummary(), run $scope.isShoppingCartFull(), and run $scope.changeViewTo("shoppingCart"). Called by AngularJS ng-click directive in Shopping view Add To Cart buttons.
 // NOTE:
 // Used in a view; therefore, define as AngularJS $scope object property.
 // $scope.shoppingCartDb.itemNameArray, $scope.shoppingCartDb.itemQuantityArray, $scope.shoppingCartDb.itemPriceEachArray, and/or $scope.shoppingCartDb.itemPriceLineArray are referred to as $scope.shoppingCartDb.item*Arrays and shopping cart database item*Arrays.
 // $scope.shoppingCartDb.item*Arrays serve as selected items to purchase database with itemName in itemNameArray serving as unique key.
 // If $scope.shoppingCartDb.item*Arrays contain data, then items are selected for purchase and it is said that shopping cart database item*Arrays are full. If $scope.shoppingCartDb.item*Arrays do not contain data, then items are not selected for purchase and it is said that shopping cart database item*Arrays are empty.
 // Each item in Shopping view fake search results is generated by AngularJS ng-repeat='skuRecord in itemsDb' directive. Each Add To Cart button button element has ng-click='addItemToCart(skuRecord.itemName)' directive. 
 // itemName argument is assigned skuRecord.itemName property value via Shopping view Add To Cart button element ng-click='addItemToCart(skuRecord.itemName) directive. skuRecord.itemName references Shopping view fake search results AngularJS ng-repeat='skuRecord in itemsDb' directive. Therefore, itemName argument is assigned an $scope.itemsDb[i].itemName property value, where i is index of item (to add to shopping cart database item*Arrays) object in $scope.itemsDb.
 $scope.addItemToCart = function(itemName){
  // For item, determine index of item object in $scope.itemsDb using "itemName" as property and itemName as value and set on local variable.
  var itemObjectBackendDbIndex = returnObjectIndexInArrayByPropertyAndValue($scope.itemsDb, "itemName", itemName);
  // For item, get item price each from $scope.itemsDb using itemObjectBackendDbIndex and set on local variable.
  var itemPriceEach = $scope.itemsDb[itemObjectBackendDbIndex].itemPriceEach;
  // Determine if item is in shopping cart database item*Arrays. If item is in shopping cart database item*Arrays, itemName is listed in $scope.shoppingCartDb.itemNameArray and $scope.shoppingCartDb.itemNameArray.indexOf(itemName) returns item index in shopping cart database item*Arrays. If item is not in shopping cart database item*Arrays, itemName is not listed in $scope.shoppingCartDb.itemNameArray and $scope.shoppingCartDb.itemNameArray.indexOf(itemName) returns -1.
  if ($scope.shoppingCartDb.itemNameArray.indexOf(itemName) === -1){
   // Item is not in shopping cart database item*Arrays. For item to add to shopping cart database item*Arrays, set item values on $scope.shoppingCartDb.item*Arrays. This adds item to shopping cart database item*Arrays.
   $scope.shoppingCartDb.itemNameArray.push(itemName); // String.
   $scope.shoppingCartDb.itemQuantityArray.push(1); // Number.
   $scope.shoppingCartDb.itemPriceEachArray.push(itemPriceEach); // Number.
   $scope.shoppingCartDb.itemPriceLineArray.push(itemPriceEach); // Number.
  } else {
   // Item is in shopping cart database item*Arrays. For item, get item index from $scope.shoppingCartDb.itemNameArray using JavaScript indexOf() method with itemName argument and set on local variable.
   var itemFrontendDbIndex = $scope.shoppingCartDb.itemNameArray.indexOf(itemName);
   // For item, get item quantity from $scope.shoppingCartDb.itemQuantityArray using itemFrontendDbIndex and set on local variable.
   var itemQuantity = $scope.shoppingCartDb.itemQuantityArray[itemFrontendDbIndex];
   // Increment item quantity by 1.
   itemQuantity += 1;
   // For item, calculate item price line by multiplying itemQuantity and itemPriceEach and set on local variable.
   var itemPriceLine = itemQuantity * itemPriceEach;
   // For item, set itemQuantity on $scope.shoppingCartDb.itemQuantityArray using itemFrontendDbIndex. This updates item quantity on $scope.shoppingCartDb.itemQuantityArray.
   $scope.shoppingCartDb.itemQuantityArray[itemFrontendDbIndex] = itemQuantity; // Number.
   // For item, set itemPriceLine on $scope.shoppingCartDb.itemPriceLineArray using itemFrontendDbIndex. This updates item price line on $scope.shoppingCartDb.itemPriceLineArray.
   $scope.shoppingCartDb.itemPriceLineArray[itemFrontendDbIndex] = itemPriceLine; // Number.
  }
  // Reset Line Items Report Form to show AngularJS validation error messages only after clicking Shopping Cart view Update Quantities button or Checkout button. If Line Items Report Form is showing AngularJS validation error messages, and then add an item to shopping cart database item*Arrays, and then change a Line Items Report Form item quantity field to an invalid value, AngularJS validation error message is shown in real time, which is undesired behavior. Desired behavior is whenever add an item to shopping cart database, show AngularJS validation error messages in Line Items Report Form only after clicking the Shopping Cart view Update Quantities button or Checkout button. The reset prevents undesired behavior and allows desired behavior.
  $scope.shoppingCartDb.isLineItemsReportFormValid = true;
  // Update Shopping Cart Summary.
  $scope.updateShoppingCartSummary();
  // Determine if shopping cart database item*Arrays contain data and insert values into Line Items Report Form item quantity fields. Yes, must run $scope.isShoppingCartFull() after add item to cart and before change view to Shopping Cart because $scope.shoppingCartDb.isShoppingCartFull property value is used in Shopping Cart view AngularJS ng-show/ng-hide directives.
  $scope.isShoppingCartFull();
  // Change view to Shopping Cart.
  $scope.changeViewTo("shoppingCart");
 };

 // ---------- METHODS USED IN SHOPPING CART VIEW ----------

 // Method: $scope.updateShoppingCartQuantities().
 // Purpose: Validate Line Items Report Form, set Line Items Report Form values on shopping cart database item*Arrays, update Shopping Cart Summary, determine if shopping cart database item*Arrays contain data, insert values into Line Items Report Form item quantity fields, determine if shopping cart database item*Arrays are full or empty, and return value indicating that Line Items Report Form is valid and shopping cart database item*Arrays are full or empty, or Line Items Report Form is invalid. More specifically, run validateForm() on Line Items Report Form, interpret Line Items Report Form remove item checkboxes and item quantity field temp values and remove items from $scope.shoppingCartDb.item*Arrays and/or update items quantity in $scope.shoppingCartDb.itemQuantityArray and items price line in $scope.shoppingCartDb.itemPriceLineArray, run $scope.updateShoppingCartSummary(), run $scope.isShoppingCartFull(), run $scope.insertValuesIntoItemQuantityFields(), determine if shopping cart database item*Arrays are full or empty, and return a value indicating either that: 1.) Line Items Report Form is valid and shopping cart database item*Arrays are full (true); or 2.) Line Items Report Form is valid and shopping cart database item*Arrays are empty (false), or Line Items Report Form is invalid (false). Called by: 1.) AngularJS ng-click directive in Shopping Cart view Update Quantities button, and 2.) $scope.processShoppingCart_checkout(), which is called by AngularJS ng-click directive in Shopping Cart view Checkout button.
 // NOTE:
 // Used in a view; therefore, define as AngularJS $scope object property.
 // Line Items Report Form displays user selected items to purchase in line item format that allows user to; 1.) remove items to purchase via remove item checkboxes, and 2.) change items quantity to purchase via item quantity fields.
 // Line Items Report Form displays item quantity field temp values (notice temp) from $scope.shoppingCartDb.itemQuantityArrayTemp (notice Temp). For an explanation of item quantity field temp values and a shopping cart database item quantity array temp, see $scope.isShoppingCartFull() notes.
 // Set Line Items Report Form values on shopping cart database item*Arrays means to read Line Items Report Form remove item checkbox values from $scope.shoppingCartDb.isRemoveItemCheckboxCheckedArray, to read Line Items Report Form item quantity field temp values from $scope.shoppingCartDb.itemQuantityArrayTemp (notice temp), and to edit $scope.shoppingCartDb.item*Arrays accordingly, which means to remove items from $scope.shoppingCartDb.item*Arrays per Line Items Report Form remove item checkbox values and/or to update items quantity in $scope.shoppingCartDb.itemQuantityArray and items price line in $scope.shoppingCartDb.itemPriceLineArray per Line Items Report Form item quantity field temp values.
 // $scope.shoppingCartDb.itemNameArray, $scope.shoppingCartDb.itemQuantityArray, $scope.shoppingCartDb.itemPriceEachArray, and/or $scope.shoppingCartDb.itemPriceLineArray are referred to as $scope.shoppingCartDb.item*Arrays and shopping cart database item*Arrays.
 // $scope.shoppingCartDb.item*Arrays serve as selected items to purchase database with itemName in itemNameArray serving as unique key.
 // If $scope.shoppingCartDb.item*Arrays contain data, then items are selected for purchase and it is said that shopping cart database item*Arrays are full. If $scope.shoppingCartDb.item*Arrays do not contain data, then items are not selected for purchase and it is said that shopping cart database item*Arrays are empty.
 // Each item in Line Items Report Form is generated by AngularJS ng-repeat='itemName in shoppingCartDb.itemNameArray' directive and has remove item checkbox and item quantity field. Each remove item checkbox input element has name='{{itemName}}' attribute, id='removeItemCheckbox{{$index}}Id' attribute, and AngularJS ng-model='shoppingCartDb.isRemoveItemCheckboxCheckedArray[$index]' directive. Each item quantity field input element has name='itemQuantityField{{$index}}' attribute and AngularJS ng-model='shoppingCartDb.itemQuantityArrayTemp[$index]' directive. Because of item quantity field input element AngularJS ng-model='shoppingCartDb.itemQuantityArrayTemp[$index]' directive, values set on $scope.shoppingCartDb.itemQuantityArrayTemp (notice Temp) are inserted into Line Items Report Form item quantity fields. The values inserted into item quantity fields are referred to as the item quantity field temp values (notice temp). In $scope.isShoppingCartFull() method, all items from $scope.shoppingCartDb.itemQuantityArray (notice no temp) are set on $scope.shoppingCartDb.itemQuantityArrayTemp (notice Temp), which inserts them into Line Items Report Form item quantity fields. In this $scope.updateShoppingCartQuantities() method, when click Shopping Cart view Update Quantities button or Checkout button, Line Items Report Form remove item checkbox values are read from $scope.shoppingCartDb.isRemoveItemCheckboxCheckedArray, Line Items Report Form item quantity field temp values are read from $scope.shoppingCartDb.itemQuantityArrayTemp (notice temp), and $scope.shoppingCartDb.item*Arrays are edited accordingly, which means removing items from $scope.shoppingCartDb.item*Arrays per Line Items Report Form remove item checkbox values and/or updating items quantity in $scope.shoppingCartDb.itemQuantityArray and items price line in $scope.shoppingCartDb.itemPriceLineArray per Line Items Report Form item quantity field temp values.
 $scope.updateShoppingCartQuantities = function(){
  // Run validateForm() on Line Items Report Form and set return value on local variable.
  var isLineItemsReportFormValid = validateForm("shoppingCartDb", "lineItemsReportForm");
  // Determine if Line Items Report Form is valid.
  if (isLineItemsReportFormValid){
   // Line Items Report Form is valid. Prepare to set Line Items Report Form values on shopping cart database item*Arrays. Get number of different items (not number of items) selected for purchase from $scope.shoppingCartDb.itemNameArray using JavaScript length property and set on local variable. The length property of any of the $scope.shoppingCartDb.item*Arrays represents the number of different items (not number of items) selected for purchase. Here, the length property of the $scope.shoppingCartDb.itemNameArray is used.
   var itemArrayLength = $scope.shoppingCartDb.itemNameArray.length;
  // Iterate over each item in Line Items Report Form using for loop i variable. Each remove item checkbox input element has AngularJS ng-model='shoppingCartDb.isRemoveItemCheckboxCheckedArray[$index]' directive. Each item quantity field input element has AngularJS ng-model='shoppingCartDb.itemQuantityArrayTemp[$index]' directive.
   for (var i = 0; i < itemArrayLength; i++){
    // For each item, determine if remove item checkbox is checked from $scope.shoppingCartDb.isRemoveItemCheckboxCheckedArray using for loop i variable as item index and set on local variable. If checked, $scope.shoppingCartDb.isRemoveItemCheckboxCheckedArray[i] is set to Boolean true. If unchecked, $scope.shoppingCartDb.isRemoveItemCheckboxCheckedArray[i] is set to Boolean false.
    var isRemoveItemCheckboxChecked = $scope.shoppingCartDb.isRemoveItemCheckboxCheckedArray[i];
    // For each item, get item quantity field temp value from $scope.shoppingCartDb.itemQuantityArrayTemp using for loop i variable as item index and set on local variable.
    var itemQuantityTempValue = $scope.shoppingCartDb.itemQuantityArrayTemp[i]; // Number if value unchanged. String if value changed. empty string ("") if field empty.
    // For each item quantity field temp value, regardless if quantity field temp value was changed, convert item quantity field temp value to Number type using JavaScript Number() casting function and set on local variable. Number() casting function does not convert numbers, converts string of numbers to equivalent number (eg, converts "123" to 123), and converts empty string ("") to 0, which correctly handles empty quantity field.
    itemQuantityTemp = Number(itemQuantityTempValue);
    // For each item, get reference to remove item checkbox input element using id attribute value with for loop i variable and set on local variable. Each remove item checkbox input element has id='removeItemCheckbox{{$index}}Id' attribute.
    var removeItemCheckbox = document.getElementById("removeItemCheckbox" + i + "Id");
    // For each item, get item name from removeItemCheckbox using JavaScript name property and set on local variable. Each remove item checkbox input element has name='{{itemName}}' attribute.
    var itemName = removeItemCheckbox.name;
    // For each item, get item index from $scope.shoppingCartDb.itemNameArray using JavaScript indexOf() method with itemName argument and set on local variable.
    var itemIndex = $scope.shoppingCartDb.itemNameArray.indexOf(itemName);
    // For each item, determine to remove item from $scope.shoppingCartDb.item*Arrays and/or to update item quantity in $scope.shoppingCartDb.itemQuantityArray and item price line in $scope.shoppingCartDb.itemPriceLineArray. If remove item checkbox is checked or item quantity temp is 0, remove item from $scope.shoppingCartDb.item*Arrays. If remove item checkbox is unchecked and item quantity temp is not 0, update item quantity in $scope.shoppingCartDb.itemQuantityArray and item price line in $scope.shoppingCartDb.itemPriceLineArray.
    if ((isRemoveItemCheckboxChecked) || (itemQuantityTemp === 0)){
     // Remove item from $scope.shoppingCartDb.item*Arrays. For each item, remove item from $scope.shoppingCartDb.item*Arrays using JavaScript splice() method with itemIndex as first argument. Items are removed from $scope.shoppingCartDb.item*Arrays, not $scope.shoppingCartDb.itemQuantityArrayTemp, not Line Items Report Form.
     $scope.shoppingCartDb.itemNameArray.splice(itemIndex, 1);
     $scope.shoppingCartDb.itemQuantityArray.splice(itemIndex, 1);
     $scope.shoppingCartDb.itemPriceEachArray.splice(itemIndex, 1);
     $scope.shoppingCartDb.itemPriceLineArray.splice(itemIndex, 1);
    } else {
     // Update item quantity in $scope.shoppingCartDb.itemQuantityArray and item price line in $scope.shoppingCartDb.itemPriceLineArray. For each item, get item price each from $scope.shoppingCartDb.itemPriceEachArray using itemIndex and set on local variable.
     var itemPriceEach = $scope.shoppingCartDb.itemPriceEachArray[itemIndex];
     // For each item, calculate item price line by multiplying itemQuantityTemp and itemPriceEach and set on local variable.
     var itemPriceLine = itemQuantityTemp * itemPriceEach;
     // For each item, regardless if quantity field temp value was changed, set itemQuantityTemp on $scope.shoppingCartDb.itemQuantityArray using itemIndex. This updates item quantity in $scope.shoppingCartDb.itemQuantityArray.
     $scope.shoppingCartDb.itemQuantityArray[itemIndex] = itemQuantityTemp;
     // For each item, set itemPriceLine on $scope.shoppingCartDb.itemPriceLineArray using itemIndex. This updates item price line in $scope.shoppingCartDb.itemPriceLineArray.
     $scope.shoppingCartDb.itemPriceLineArray[itemIndex] = itemPriceLine;
    }
    // For each item, since Line Items Report Form values are now set on shopping cart database item*Arrays, regardless if remove item checkbox was checked, uncheck remove item checkbox.
    $scope.shoppingCartDb.isRemoveItemCheckboxCheckedArray[i] = false;
   }
   // Update Shopping Cart Summary.
   $scope.updateShoppingCartSummary();
   // Determine if shopping cart database item*Arrays contain data, insert values into Line Items Report Form item quantity fields, and set return value on local variable.
   var isShoppingCartFull = $scope.isShoppingCartFull();
   // Determine if shopping cart database item*Arrays are full using return value.
   if (isShoppingCartFull){
    // Shopping cart database item*Arrays are full. Return Boolean true value to indicate that Line Items Report Form is valid and shopping cart database item*Arrays are full.
    return true; // To $scope.processShoppingCart_checkout().
   } else {
    // Shopping cart database item*Arrays are empty. Return Boolean false value to indicate that Line Items Report Form is valid and shopping cart database item*Arrays are empty.
    return false; // To $scope.processShoppingCart_checkout().
   }
  } else {
   // Line Items Report Form is invalid. Return Boolean false value to indicate that Line Items Report Form is invalid. Because validateForm() alerts user form is invalid and sets a property value to indicate that form is invalid, there is nothing else to do here.
   return false; // To $scope.processShoppingCart_checkout().
  }
 };

 // Method: $scope.addDeliveryMethod().
 // Purpose: Add delivery method to shopping cart database. Called by AngularJS ng-click directive in Shopping Cart view Delivery Method Form radio buttons.
 // NOTE:
 // Used in a view; therefore, define as AngularJS $scope object property.
 // Each delivery method in Delivery Method Form is generated by AngularJS ng-repeat='deliveryMethodRecord in deliveryMethodsDb' directive. Each delivery method radio button input element has value='{{deliveryMethodRecord.deliveryMethodName}}' attribute, AngularJS ng-model='shoppingCartDb.deliveryMethod' directive, and AngularJS ng-click='addDeliveryMethod()' directive. Each delivery method radio button span element has id='shoppingCartDeliveryMethodCssRadioBtn{{$index}}Id' attribute. The $scope.shoppingCartDb.deliveryMethod property assumes the checked delivery method radio button input element deliveryMethodRecord.deliveryMethodName value.
 $scope.addDeliveryMethod = function(){
  // Prepare to get checked delivery method price. For checked delivery method, determine index of delivery method object in $scope.deliveryMethodsDb using "deliveryMethodName" as property and $scope.shoppingCartDb.deliveryMethod as value and set on local variable. Each delivery method radio button input element has value='{{deliveryMethodRecord.deliveryMethodName}}' attribute and AngularJS ng-model='shoppingCartDb.deliveryMethod' directive. The $scope.shoppingCartDb.deliveryMethod property assumes the checked delivery method radio button input element deliveryMethodRecord.deliveryMethodName value.
  var deliveryMethodObjectBackendDbIndex = returnObjectIndexInArrayByPropertyAndValue($scope.deliveryMethodsDb, "deliveryMethodName", $scope.shoppingCartDb.deliveryMethod);
  // For checked delivery method, get delivery method price each from $scope.deliveryMethodsDb using deliveryMethodObjectBackendDbIndex and set on $scope.shoppingCartDb.deliveryMethodPriceEach.
  $scope.shoppingCartDb.deliveryMethodPriceEach = $scope.deliveryMethodsDb[deliveryMethodObjectBackendDbIndex].deliveryMethodPriceEach; // Number.
  // Update Shopping Cart Summary.
  $scope.updateShoppingCartSummary();
 };

 // Method: $scope.processShoppingCart_checkout().
 // Purpose: Validate Line Items Report Form, set Line Items Report Form values on shopping cart database item*Arrays, update Shopping Cart Summary, insert values into Line Items Report Form item quantity fields, determine if shopping cart database item*Arrays contain data, return value indicating Line Items Report Form is valid and shopping cart database item*Arrays are full or empty, or Line Items Report Form is invalid, determine if Line Items Report Form is valid and shopping cart database item*Arrays are full, validate Delivery Method Form, change view to Shipping. More specifically, run $scope.updateShoppingCartQuantities(), run validateForm() on Delivery Method Form, and change view to Shipping. Called by AngularJS ng-click directive in Shopping Cart view Checkout button.
 // NOTE: Used in a view; therefore, define as AngularJS $scope object property.
 $scope.processShoppingCart_checkout = function(){
  // Validate Line Items Report Form, set Line Items Report Form values on shopping cart database item*Arrays, update Shopping Cart Summary, determine if shopping cart database item*Arrays contain data, return value indicating Line Items Report Form is valid and shopping cart database item*Arrays are full or empty, or Line Items Report Form is invalid, and set return value on local variable.
  var isLineItemsReportFormValidAndShoppingCartFull = $scope.updateShoppingCartQuantities();
  // Determine if Line Items Report Form is valid and shopping cart database item*Arrays are full. If Line Items Report Form is valid and shopping cart database item*Arrays are full, $scope.updateShoppingCartQuantities() returns true. Otherwise, $scope.updateShoppingCartQuantities() returns false.
  if (isLineItemsReportFormValidAndShoppingCartFull){
   // Line Items Report Form is valid and shopping cart database item*Arrays are full. Run validateForm() on Delivery Method Form and set return value on local variable.
   var isDeliveryMethodFormValid = validateForm("shoppingCartDb", "deliveryMethodForm");
   // Determine if Delivery Method Form is valid.
   if (isDeliveryMethodFormValid){
    // Delivery Method Form is valid. Change view to Shipping.
    $scope.changeViewTo("shipping");
   } else {
    // Delivery Method Form is invalid. Prepare to position Delivery Method Form heading with Delivery Method Form validation error message to top of viewport. $scope.validateForm() method firstInvalidFormElement.parentNode.scrollIntoView(true) function does not position Delivery Method Form heading with Delivery Method Form validation error message to top of viewport; therefore, this custom solution required. Get reference to Delivery Method Form heading using id attribute value and set on local variable.
    deliveryMethodFormHeading = document.getElementById("deliveryMethodFormHeadingId");
    // Position Delivery Method Form heading with Delivery Method Form validation error message to top of viewport using JavaScript scrollIntoView() method with true argument. true argument means scroll top of element to top of viewport.
    deliveryMethodFormHeading.scrollIntoView(true);
   }
  }
 };

 // ---------- METHODS USED IN SHIPPING VIEW ----------

 // Method: $scope.processShipping_goToBilling().
 // Purpose: Validate Shipping Form and change view to Billing. More specifically, run validateForm() on Shipping Form, generate and set $scope.shippingDb.fullName, insert value into Billing view Credit Card Form Cardholder Name field, and change view to Billing. Called by AngularJS ng-click directive in Shipping view Billing button.
 // NOTE: Used in a view; therefore, define as AngularJS $scope object property.
 $scope.processShipping_goToBilling = function(){
  // Run validateForm() on Shipping Form and set return value on local variable.
  var isShippingFormValid = validateForm("shippingDb", "shippingForm");
  // Determine if Shipping Form is valid.
  if (isShippingFormValid){
   // Shipping Form is valid. Generate shipping database fullname by concatenating $scope.shippingDb.firstName and $scope.shippingDb.lastName and set on $scope.shippingDb.fullName.
   $scope.shippingDb.fullName = $scope.shippingDb.firstName + " " + $scope.shippingDb.lastName;
   // Prepare to insert value into Billing view Credit Card Form Cardholder Name field. Billing view Credit Card Form Cardholder Name field has AngularJS ng-model='billingDb.creditCardholderNameTemp' directive. Therefore, value set on $scope.billingDb.creditCardholderNameTemp property is inserted into Billing view Credit Card Form Cardholder Name field. If billing database credit cardholder name is empty string (""), insert shipping database fullname into Billing view Credit Card Form Cardholder Name field. If billing database credit cardholder name is not empty string (""), insert billing database credit cardholder name into Billing view Credit Card Form Cardholder Name field. In other words, insert billing database credit cardholder name if not empty string (""); otherwise, insert shipping database fullname. Determine if billing database credit cardholder name is empty string ("").
   if ($scope.billingDb.creditCardholderName === ""){
    // Billing database credit cardholder name is empty string (""). Insert shipping database fullname into Billing view Credit Card Form Cardholder Name field by setting $scope.shippingDb.fullName on $scope.billingDb.creditCardholderNameTemp.
    $scope.billingDb.creditCardholderNameTemp = $scope.shippingDb.fullName;
   } else {
    // Billing database credit cardholder name is not empty string (""). Insert billing database credit cardholder name into Billing view Credit Card Form Cardholder Name field by setting $scope.billingDb.creditCardholderName on $scope.billingDb.creditCardholderNameTemp.
    $scope.billingDb.creditCardholderNameTemp = $scope.billingDb.creditCardholderName;
   }
   // Change view to Billing.
   $scope.changeViewTo("billing");
  }
 };

 // ---------- METHODS USED IN BILLING VIEW ----------

 // Method: $scope.insertBillingAddressFormValues().
 // Purpose: Insert values into Billing Address Form. More specifically, determine if Billing Address Same as the shipping address checkbox is unchecked, if no, do nothing, if yes, determine if billing database address related property values are empty string (""), if yes, insert values into Billing Address Form by setting shipping database address related property values on billing database address related temp properties (notice temp), if no, insert values into Billing Address Form by setting billing database address related property values (notice no temp) on billing database address related temp properties (notice temp). Called by AngularJS ng-click directive in Billing view Billing Address Same as the shipping address checkbox.
 // NOTE:
 // Used in a view; therefore, define as AngularJS $scope object property.
 // Billing Address Form displays billing address information in fields and a dropdown for user editing.
 // In this $scope.insertBillingAddressFormValues() method, values (either shipping database address related property values or billing database address related property values (notice no temp)) are set on billing database address related temp properties (notice temp). In $scope.processBilling_goToReviewOrder() method, values (either shipping database address related property values or billing database address related property temp values (notice temp)) are set on billing database address related properties (notice no temp).
 // If Billing Address Form field input elements and dropdown select element use AngularJS ng-model='billingDb.fieldNameXyz' directive, the following scenario results in undesired behavior. Scenario: 1.) in Billing view uncheck Billing Address same as the shipping address checkbox to show Billing Address Form, 2.) change Billing Address Form values and do not click Billing view Review Order button, 3.) decide you do not like the Billing Address Form changes and that you made, that you would like to clear the Billing Address Form changes that you made, and that you would like to start over from scratch with the values previously inserted into Billing Address Form, 4.) check and then uncheck Billing Address Same as the shipping address checkbox thinking it would clear the Billing Address Form changes that you made and start over from scratch with the values previously inserted into Billing Address Form. Undesired behavior: Billing Address Form does not and start over from scratch and show Shipping Form shipping database address related values inserted into Billing Address Form, instead Billing Address Form shows the Billing Address Form changes that you made and want to clear. Desired behavior: the only time changes to Billing Address Form field and dropdown values are to be saved/accepted is when user explicitly clicks Billing view Review Order button, not when user simply changes field or dropdown value. Cause of undesired behavior: AngularJS ng-model='billingDb.fieldNameXyz' directive. When change Billing Address Form field and dropdown values, AngularJS AngularJS ng-model='$scope.billingDb.fieldNameXyz' directive two way data binding automatically updates the $scope.billingDb.fieldNameXyz (model) property values. Solution: 1.) Have Billing Address Form field input elements and dropdown select element use ng-model='billingDb.fieldNameXyzTemp' directives (notice Temp), not ng-model='billingDb.fieldNameXyz' directives (notice no temp); and 2.) when click Billing view Review Order button, set values on billing database address related properties (notice no temp) according to whether Billing Address Form is hidden or shown: a.) when click Billing view Review Order button, if Billing Address Form is hidden, set Shipping Form shipping database address related property values on billing database address related properties (notice no temp); b.) when click Billing view Review Order button, if Billing Address Form is shown, set Billing Address Form billing database address related property temp values (notice temp) on billing database address related properties (notice no temp). This way, changes to Billing Address Form field and dropdown values are set on $scope.billingDb.fieldNameXyzTemp (notice Temp), not $scope.billingDb.fieldNameXyz (notice no temp); b.) when click Billing view Review Order button, set $scope.billingDb.fieldNameXyzTemp values (notice Temp) on $scope.billingDb.fieldNameXyz (notice no temp); and c.) in Billing view if change Billing Address Form field or dropdown values and do not click Review Order button, and then check and uncheck Billing view Billing Address Same as the shipping address checkbox, disregard the Billing Address Form  $scope.billingDb.fieldNameXyzTemp values (notice Temp) and insert values into the Billing Address Form according to the following: if billing database address related property values are empty string (""), insert Shipping Form shipping database address related property values (notice no temp) into Billing Address Form by setting $scope.shippingDb.fieldNameXyz values on $scope.billingDb.fieldNameXyzTemp values (notice temp), if billing database address related property values are not empty string (""), insert billing database address related property values (notice no temp) into Billing Address Form by setting $scope.billingDb.fieldNameXyz values (notice no temp) on $scope.billingDb.fieldNameXyzTemp values (notice temp). Hence, if change Billing Address Form field and dropdown values without clicking Review Order and then check and uncheck Billing Address Same as the shipping address checkbox, the Billing Address Form starts over from scratch showing the values previously inserted into the Billing Address Form.
 // Billing view Billing Address Same as the shipping address checkbox input element has AngularJS ng-model='billingDb.isBillingAddressSameAsTheShippingAddressCheckboxChecked' directive. Billing view Billing Address Form is wrapped in div element with AngularJS ng-hide='billingDb.isBillingAddressSameAsTheShippingAddressCheckboxChecked' directive. Therefore, the checked or unchecked status of Billing Address Same as the shipping address checkbox determines if Billing Address Form is shown or hidden.
 // If Billing Address Form is hidden, there is no need to insert values into Billing Address Form and values are not inserted into Billing Address Form. If Billing Address Form is shown, as convenience to user, values are inserted into Billing Address Form. Each Billing Address Form field input element and dropdown select element has AngularJS ng-model='billingDb.fieldNameXyzTemp' directive (notice Temp). Because of field input element and dropdown select element AngularJS ng-model='billingDb.fieldNameTemp' directives, values set on $scope.billingDb.fieldNameXyzTemp are inserted into Billing Address Form fields and dropdown. The values set on $scope.billingDb.fieldNameXyzTemp (notice temp) are either shipping database address related property values or billing database address related property values (notice no temp). If billing database address related property values (notice no temp) are empty string (""), set shipping database address related property values on scope.billingDb.fieldNameXyzTemp (notice temp); otherwise, set billing database address related property values (notice no temp) on scope.billingDb.fieldNameXyzTemp (notice temp).
 // Billing database address related property values will be same as shipping database address related property values when: 1.) hide Billing Address Form and click Billing view Review Order button, and 2.) show Billing Address Form, with values inserted into Billing Address Form from billing database address related property values (notice no temp) being same as shipping database address related property values per scenario 1 above, do not change Billing Address Form values, and click Billing view Review Order button. After both scenarios, Billing Address Form values are same as Shipping Form address related property values. One scenario results in billing database address related property values (notice no temp) being different than shipping database address related property values: show Billing Address Form, change Billing Address Form values, and click Billing view Review Order button. After this scenario, Billing Address Form values are different than Shipping Form address related property values.
 $scope.insertBillingAddressFormValues = function(event){
   // Determine if Billing Address Same as the shipping address checkbox is unchecked. Billing Address Same as the shipping address checkbox input element has AngularJS ng-model='billingDb.isBillingAddressSameAsTheShippingAddressCheckboxChecked' directive. If unchecked, $scope.billingDb.isBillingAddressSameAsTheShippingAddressCheckboxChecked is set to Boolean false and Billing Address Form is shown. If checked, $scope.billingDb.isBillingAddressSameAsTheShippingAddressCheckboxChecked is set to Boolean true and Billing Address Form is hidden.
  if ($scope.billingDb.isBillingAddressSameAsTheShippingAddressCheckboxChecked === false){
   // The Billing Address Same as the shipping address checkbox is unchecked. Prepare to insert values into Billing Address Form. Determine if billing database address related property values are empty string (""). Any billing database address related properties can be used for this determination. Here, $scope.billingDb.address is used.
   if ($scope.billingDb.address === ""){
    // Billing database address related property values are empty string (""). Insert Shipping Form values into Billing Address Form by setting shipping database values on billing address related temp properties (notice temp).
    $scope.billingDb.addressTemp = $scope.shippingDb.address;
    $scope.billingDb.address2Temp = $scope.shippingDb.address2;
    $scope.billingDb.cityTemp = $scope.shippingDb.city;
    $scope.billingDb.stateTemp = $scope.shippingDb.state;
    $scope.billingDb.zipCodeTemp = $scope.shippingDb.zipCode;
    $scope.billingDb.phoneNumberTemp = $scope.shippingDb.phoneNumber;
   } else {
    // Billing database address related property values are not empty string (""). Insert previous Billing Address values into Billing Address Form by setting billing database values (notice no temp) on billing address related temp properties (notice temp).
    $scope.billingDb.addressTemp = $scope.billingDb.address;
    $scope.billingDb.address2Temp = $scope.billingDb.address2;
    $scope.billingDb.cityTemp = $scope.billingDb.city;
    $scope.billingDb.stateTemp = $scope.billingDb.state;
    $scope.billingDb.zipCodeTemp = $scope.billingDb.zipCode;
    $scope.billingDb.phoneNumberTemp = $scope.billingDb.phoneNumber;
   }
  } 
 };

 // Method: $scope.processBilling_goToReviewOrder().
 // Purpose: Validate Credit Card Form, either set Shipping Form address related property values on billing database address related properties (notice no temp) and change view to Review Order, or validate Billing Address Form, set Billing Address Form values on billing database address related properties (notice no temp), and change view to Review Order. More specifically, run validateForm() on Credit Card Form, set Credit Card Form Cardholder Name temp value (notice temp) on $scope.billingDb.creditCardholderName, generate and set Credit Card Form Card Number value on $scope.billingDb.creditCardNumberHidden, determine if Billing Address Same as the shipping address checkbox is checked, if yes, set shipping database address related property values on billing database address related properties (notice no temp), and change view to Review Order, if no, run validateForm() on Billing Address Form, set billing database address related property temp values (notice temp) on billing database address related properties (notice no temp), and change view to Review Order. Called by AngularJS ng-click directive in Billing view Review Order button.
 // NOTE: Used in a view; therefore, define as AngularJS $scope object property.
 // Billing Address Form displays billing address information in fields and a dropdown for user editing.
 // Billing Address Form displays billing address field and dropdown temp values (notice temp) from $scope.billingDb.fieldNameXyzTemp (notice Temp). For an explanation of billing address field and dropdown temp values (notice temp) and billing database address related temp properties (notice temp), see $scope.insertBillingAddressFormValues().
 // In $scope.insertBillingAddressFormValues() method, values (either shipping database address related property values or billing database address related property values (notice no temp)) are set on billing database address related temp properties (notice temp). In this $scope.processBilling_goToReviewOrder() method, values (either shipping database address related property values or billing database address related property temp values (notice temp)) are set on billing database address related properties (notice no temp).
 $scope.processBilling_goToReviewOrder = function(event){
  // Run validateForm() on Credit Card Form and set return value on local variable.
  var isCreditCardFormValid = validateForm("billingDb", "creditCardForm");
  // Determine if Credit Card Form is valid.
  if (isCreditCardFormValid){
   // Credit Card Form is valid. Get credit cardholder name temp value from $scope.billingDb.creditCardholderNameTemp and set on $scope.billingDb.creditCardholderName.
   $scope.billingDb.creditCardholderName = $scope.billingDb.creditCardholderNameTemp;
   // Get credit card number from $scope.billingDb.creditCardNumber, run $scope.regExpDb.hideCreditCardNumber() on credit card number, and set return value on $scope.billingDb.creditCardNumberHidden.
   $scope.billingDb.creditCardNumberHidden = $scope.regExpDb.hideCreditCardNumber($scope.billingDb.creditCardNumber);
   // Determine if Billing Address Same as the shipping address checkbox is checked. Billing Address Same as the shipping address checkbox input element has AngularJS ng-model='billingDb.isBillingAddressSameAsTheShippingAddressCheckboxChecked' directive. If checked, $scope.billingDb.isBillingAddressSameAsTheShippingAddressCheckboxChecked is set to Boolean true. If unchecked, $scope.billingDb.isBillingAddressSameAsTheShippingAddressCheckboxChecked is set to Boolean false.
   if ($scope.billingDb.isBillingAddressSameAsTheShippingAddressCheckboxChecked){
    // Billing Address Same as the shipping address checkbox is checked. Set shipping database address related property values on billing database properties.
    $scope.billingDb.address = $scope.shippingDb.address;
    $scope.billingDb.address2 = $scope.shippingDb.address2;
    $scope.billingDb.city = $scope.shippingDb.city;
    $scope.billingDb.state = $scope.shippingDb.state;
    $scope.billingDb.zipCode = $scope.shippingDb.zipCode;
    $scope.billingDb.phoneNumber = $scope.shippingDb.phoneNumber;
    // Change view to Review Order.
    $scope.changeViewTo("reviewOrder");
   } else {
    // Billing Address Same as the shipping address checkbox is unchecked. Run validateForm() on Billing Address Form and set return value on local variable.
    var isBillingAddressFormValid = validateForm("billingDb", "billingAddressForm");
    // Determine if Billing Address Form is valid.
    if (isBillingAddressFormValid){
     // Billing Address Form is valid. Set billing database address related property temp values (notice temp) on billing database properties.
     $scope.billingDb.address = $scope.billingDb.addressTemp;
     $scope.billingDb.address2 = $scope.billingDb.address2Temp;
     $scope.billingDb.city = $scope.billingDb.cityTemp;
     $scope.billingDb.state = $scope.billingDb.stateTemp;
     $scope.billingDb.zipCode = $scope.billingDb.zipCodeTemp;
     $scope.billingDb.phoneNumber = $scope.billingDb.phoneNumberTemp;
     // Change view to Review Order.
     $scope.changeViewTo("reviewOrder");
    }
   }
  }
 };

 // ---------- METHODS USED IN REVIEW ORDER VIEW ----------

 // Method: $scope.placeFakeOrder().
 // Purpose: Define and generate JavaScript object representing order data, serialize it to JSON string, and change view to Order Confirmation. More specifically, run $scope.createOrderObject() and run $scope.changeViewTo("orderConfirmation"). Called by AngularJS ng-click directive in Billing view Place Fake Order/Order Confirmation button.
 // NOTE: Used in a view; therefore, define as AngularJS $scope object property.
 $scope.placeFakeOrder = function(event){
  // Define and generate JavaScript object representing order data and serialize it to JSON string.
  $scope.createOrderObject();
  // Change view to Order Confirmation.
  $scope.changeViewTo("orderConfirmation");
 };

 // ---------- METHODS USED IN ORDER CONFIRMATION VIEW ----------

 // Method: $scope.createOrderObject().
 // Purpose: Define and generate JavaScript object representing order data and serialize it to JSON string. More specifically, define JavaScript object representing order data, generate order object items property array items, and serialize order object to JSON string using AngularJS json filter. Called by $scope.placeFakeOrder(), which is called by AngularJS ng-click directive in Review Order view Place Fake Order/Order Confirmation button.
 // NOTE: Used in a view; therefore, define as AngularJS $scope object property.
 // $scope.shoppingCartDb.itemNameArray, $scope.shoppingCartDb.itemQuantityArray, $scope.shoppingCartDb.itemPriceEachArray, and/or $scope.shoppingCartDb.itemPriceLineArray are referred to as $scope.shoppingCartDb.item*Arrays and shopping cart database item*Arrays.
 // $scope.shoppingCartDb.item*Arrays serve as selected items to purchase database with itemName in itemNameArray serving as unique key.
 // The data representing each item selected for purchase is copied from $scope.shoppingCartDb.item*Arrays and set on and assembled into an object in the order object items array. Each $scope.shoppingCartDb.item*Array represents an order object items array object property. More specifically, $scope.shoppingCartDb.itemNameArray[i] is set on $scope.orderObjectDb.items[i].itemName (notice itemName in both), $scope.shoppingCartDb.itemQuantityArray[i] is set on $scope.orderObjectDb.items[i].itemQuantity (notice itemQuantity in both), $scope.shoppingCartDb.itemPriceEachArray[i] is set on $scope.orderObjectDb.items[i].itemPriceEach (notice itemPriceEach in both), and $scope.shoppingCartDb.itemPriceLineArray[i] property value is set on $scope.orderObjectDb.items[i].itemPriceLine (notice itemPriceLine in both).
 $scope.createOrderObject = function(){
  $scope.orderObject = {
   allItemsQuantity: $scope.shoppingCartDb.allItemsQuantity,
   allItemsPrice: $filter('currency')($scope.shoppingCartDb.allItemsPrice, "$"), // String.
   deliveryMethod: $scope.shoppingCartDb.deliveryMethod,
   deliveryMethodPriceEach: $filter('currency')($scope.shoppingCartDb.deliveryMethodPriceEach, "$"), // String.
   allItemsAndDeliveryMethodPrice: $filter('currency')($scope.shoppingCartDb.allItemsAndDeliveryMethodPrice, "$"), // String.
   items: [], // Define order object items property as an array. The order object items property array items are generated below.
   shippingInformation: {
    fullName: $scope.shippingDb.fullName,
    address: $scope.shippingDb.address,
    address2: $scope.shippingDb.address2,
    city: $scope.shippingDb.city,
    state: $scope.shippingDb.state,
    zipCode: $scope.shippingDb.zipCode,
    phoneNumber: $scope.shippingDb.phoneNumber,
    emailAddress: $scope.shippingDb.emailAddress
   },
   billingInformation: {
    creditCardholderName: $scope.billingDb.creditCardholderName,
    creditCardNumber: $scope.billingDb.creditCardNumber,
    creditCardExpirationMonth: $scope.billingDb.creditCardExpirationMonth,
    creditCardExpirationYear: $scope.billingDb.creditCardExpirationYear,
    creditCardSecurityCode: $scope.billingDb.creditCardSecurityCode,
    address: $scope.billingDb.address,
    address2: $scope.billingDb.address2,
    city: $scope.billingDb.city,
    state: $scope.billingDb.state,
    zipCode: $scope.billingDb.zipCode,
    phoneNumber: $scope.billingDb.phoneNumber
   }
  };
  // Prepare to generate order object items property array items. Get number of different items (not number of items) selected for purchase from $scope.shoppingCartDb.itemNameArray using JavaScript length property and set on local variable. The length property of any of the $scope.shoppingCartDb.item*Arrays represents the number of different items (not number of items) selected for purchase. Here, the length property of the $scope.shoppingCartDb.itemNameArray is used.
  var itemArrayLength = $scope.shoppingCartDb.itemNameArray.length;
  // Iterate over items selected for purchase.
  for (var i = 0; i < itemArrayLength; i++){
   // Generate order object items property array items. Further define order object items property as an array of JavaScript objects. The order object items property was defined as an array above.
   $scope.orderObject.items[i] = {};
   // For each item, get item name from $scope.shoppingCartDb.itemNameArray using for loop i variable as item index and set on $scope.orderObjectDb.items[i].itemName using for loop i variable as items index.
   $scope.orderObject.items[i].itemName = $scope.shoppingCartDb.itemNameArray[i]; // String.
   // For each item, get item quantity from $scope.shoppingCartDb.itemQuantityArray using for loop i variable as item index and set on $scope.orderObject.items[i].itemQuantity using for loop i variable as items index.
   $scope.orderObject.items[i].itemQuantity = $scope.shoppingCartDb.itemQuantityArray[i]; // Number.
   // For each item, get item price each from $scope.shoppingCartDb.itemPriceEachArray using for loop i variable as item index and set on local variable.
   var itemPriceEach = $scope.shoppingCartDb.itemPriceEachArray[i]; // Number.
   // For each item price each, convert item price each Number type value to String type value using AngularJS currency filter and set on $scope.orderObject.items[i].itemPriceEach using for loop i variable as items index.
   $scope.orderObject.items[i].itemPriceEach = $filter('currency')(itemPriceEach, "$"); // String.
   // For each item, get item price line from $scope.shoppingCartDb.itemPriceLineArray using for loop i variable as item index and set on local variable.
   var itemPriceLine = $scope.shoppingCartDb.itemPriceLineArray[i]; // Number.
   // For each item price line, convert item price line Number type value to String type value using AngularJS currency filter and set on $scope.orderObject.items[i].itemPriceLine using for loop i variable as items index.
   $scope.orderObject.items[i].itemPriceLine = $filter('currency')(itemPriceLine, "$"); // String.
  }
  // Serialize order object to JSON string using AngularJS json filter and set on $scope.orderObjectAsJsonString.
  $scope.orderObjectAsJsonString = $filter('json')($scope.orderObject, 1);
 };

});
