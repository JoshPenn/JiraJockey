(function(window) {
  window.jj = window.jj || {};
  var jj = window.jj;

  jj.forms = {
    locale  : 'us',

    setLocale : function(locale) {
      var isExist = !!this.stores[this.locale];
      this.locale = isExist ? locale : this.locale;
    },

    // get value from a locale, fallback to US if not exist
    get : function (property) {
      var localeValue = this.stores[this.locale];
      var usValue     = this.stores.us;
      return findValue(localeValue, property) || findValue(usValue, property, '');
    },

    // all languages will use defaults to apply their values to teh english structure
    stores : {

      // default structure and language
      us : {
        company : 'Branding Brand',
        phone   : '4123301234',
        email   : 'brand@brandingbrand.com',
        address : {
          country : 'US',
          city    : 'Pittsburgh',
          state   : 'PA',
          zip     : '15232',
          line1   : '123 Cancel Order',
          line2   : 'apt 2'
        },
        name    : {
          first : 'Test',
          last  : 'Order'
        },
        cc : {
          type   : 'visa',
          cvv    : '123',
          number : '4111111111111111',
          expiration : {
            month : '5',
            year  : '2018'
          }
        },
        login : {
          login : 'qatest@brandingbrand.com',
          password : 'Branders1234$'
        }
      },

      gb : {
        address: {
          zip : 'GX11 1AA'
        }
      },

      // German
      de : {
        phone : '11111111111'
      },

      // French
      fr : {
      },
    }
  };
})(window);
