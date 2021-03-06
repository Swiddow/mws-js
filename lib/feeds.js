// Generated by CoffeeScript 1.6.3
(function() {
  var FeedsClient, MWS_FEEDS, enums, fs, mws, requests, types, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  fs = require('fs');

  mws = require("./core");

  MWS_FEEDS = new mws.Service({
    name: "Feeds",
    group: "Feeds",
    path: "/",
    version: "2009-01-01",
    legacy: true
  });

  types = {
    FeedTypes: {
      XML: ['_POST_PRODUCT_DATA_', '_POST_PRODUCT_RELATIONSHIP_DATA_', '_POST_ITEM_DATA_', '_POST_PRODUCT_OVERRIDES_DATA_', '_POST_PRODUCT_IMAGE_DATA_', '_POST_PRODUCT_PRICING_DATA_', '_POST_INVENTORY_AVAILABILITY_DATA_', '_POST_ORDER_ACKNOWLEDGEMENT_DATA_', '_POST_ORDER_FULFILLMENT_DATA_', '_POST_FULFILLMENT_ORDER_REQUEST_DATA_', '_POST_FULFILLMENT_ORDER_CANCELLATION_REQUEST_DATA_', '_POST_PAYMENT_ADJUSTMENT_DATA_'],
      Flat: ['_POST_FLAT_FILE_LISTINGS_DATA_', '_POST_FLAT_FILE_ORDER_ACKNOWLEDGEMENT_DATA_', '_POST_FLAT_FILE_FULFILLMENT_DATA_', '_POST_FLAT_FILE_PAYMENT_ADJUSTMENT_DATA_', '_POST_FLAT_FILE_INVLOADER_DATA_', '_POST_FLAT_FILE_CONVERGENCE_LISTINGS_DATA_', '_POST_FLAT_FILE_BOOKLOADER_DATA_', '_POST_FLAT_FILE_PRICEANDQUANTITYONLY_UPDATE_DATA_'],
      Other: ['_POST_UIEE_BOOKLOADER_DATA_']
    },
    FeedTypeFormats: {
      _POST_PRODUCT_DATA_: 'XML',
      _POST_PRODUCT_RELATIONSHIP_DATA_: 'XML',
      _POST_ITEM_DATA_: 'XML',
      _POST_PRODUCT_OVERRIDES_DATA_: 'XML',
      _POST_PRODUCT_IMAGE_DATA_: 'XML',
      _POST_PRODUCT_PRICING_DATA_: 'XML',
      _POST_INVENTORY_AVAILABILITY_DATA_: 'XML',
      _POST_ORDER_ACKNOWLEDGEMENT_DATA_: 'XML',
      _POST_ORDER_FULFILLMENT_DATA_: 'XML',
      _POST_FULFILLMENT_ORDER_REQUEST_DATA_: 'XML',
      _POST_FULFILLMENT_ORDER_CANCELLATION_REQUEST_DATA_: 'XML',
      _POST_PAYMENT_ADJUSTMENT_DATA_: 'XML',
      _POST_FLAT_FILE_LISTINGS_DATA_: 'FlatFile',
      _POST_FLAT_FILE_ORDER_ACKNOWLEDGEMENT_DATA_: 'FlatFile',
      _POST_FLAT_FILE_FULFILLMENT_DATA_: 'FlatFile',
      _POST_FLAT_FILE_PAYMENT_ADJUSTMENT_DATA_: 'FlatFile',
      _POST_FLAT_FILE_INVLOADER_DATA_: 'FlatFile',
      _POST_FLAT_FILE_CONVERGENCE_LISTINGS_DATA_: 'FlatFile',
      _POST_FLAT_FILE_BOOKLOADER_DATA_: 'FlatFile',
      _POST_FLAT_FILE_PRICEANDQUANTITYONLY_UPDATE_DATA_: 'FlatFile',
      _POST_UIEE_BOOKLOADER_DATA_: 'UIEE'
    },
    FeedProcessingStatus: {
      _SUBMITTED_: 'Submitted',
      _IN_PROGRESS_: 'In Progress',
      _CANCELLED_: 'Cancelled',
      _DONE_: 'Done'
    }
  };

  enums = exports.enums = {
    FeedProcessingStatus: (function(_super) {
      __extends(_Class, _super);

      function _Class(required, init) {
        var k, v;
        _Class.__super__.constructor.call(this, 'FeedProcessingStatus', (function() {
          var _ref, _results;
          _ref = types.FeedProcessingStatus;
          _results = [];
          for (k in _ref) {
            v = _ref[k];
            _results.push(k);
          }
          return _results;
        })());
      }

      return _Class;

    })(mws.Enum),
    FeedTypeList: (function(_super) {
      __extends(_Class, _super);

      function _Class(required, init) {
        var k, v;
        _Class.__super__.constructor.call(this, 'FeedTypeList', 'Type', (function() {
          var _ref, _results;
          _ref = types.FeedTypeFormats;
          _results = [];
          for (k in _ref) {
            v = _ref[k];
            _results.push(k);
          }
          return _results;
        })(), required, init);
      }

      return _Class;

    })(mws.EnumList),
    FeedProcessingStatusList: (function(_super) {
      __extends(_Class, _super);

      function _Class(required, init) {
        var k, v;
        _Class.__super__.constructor.call(this, 'FeedProcessingStatusList', 'Status', (function() {
          var _ref, _results;
          _ref = types.FeedProcessingStatus;
          _results = [];
          for (k in _ref) {
            v = _ref[k];
            _results.push(k);
          }
          return _results;
        })(), required, init);
      }

      return _Class;

    })(mws.EnumList)
  };

  requests = {
    GetServiceStatus: (function(_super) {
      __extends(_Class, _super);

      function _Class(init) {
        _Class.__super__.constructor.call(this, MWS_FEEDS, 'GetServiceStatus', [], {}, null, init);
      }

      return _Class;

    })(mws.Request),
    CancelFeedSubmissions: (function(_super) {
      __extends(_Class, _super);

      function _Class(init) {
        _Class.__super__.constructor.call(this, MWS_FEEDS, "CancelFeedSubmissions", [new mws.ParamList('FeedSubmissionIdList', 'Id'), new enums.FeedTypeList(), new mws.Timestamp('SubmittedFromDate'), new mws.Timestamp('SubmittedToDate')], {}, null, init);
      }

      return _Class;

    })(mws.Request),
    GetFeedSubmissionList: (function(_super) {
      __extends(_Class, _super);

      function _Class(init) {
        _Class.__super__.constructor.call(this, MWS_FEEDS, "GetFeedSubmissionList", [new mws.ParamList('FeedSubmissionIdList', 'Id'), new mws.Param('MaxCount'), new enums.FeedTypeList(), new enums.FeedProcessingStatusList(), new mws.Timestamp('SubmittedFromDate'), new mws.Timestamp('SubmittedToDate')], {}, null, init);
      }

      return _Class;

    })(mws.Request),
    GetFeedSubmissionListByNextToken: (function(_super) {
      __extends(_Class, _super);

      function _Class(init) {
        _Class.__super__.constructor.call(this, MWS_FEEDS, "GetFeedSubmissionListByNextToken", [new mws.Param('NextToken', true)], {}, null, init);
      }

      return _Class;

    })(mws.Request),
    GetFeedSubmissionCount: (function(_super) {
      __extends(_Class, _super);

      function _Class(init) {
        _Class.__super__.constructor.call(this, MWS_FEEDS, "GetFeedSubmissionCount", [new enums.FeedTypeList(), new enums.FeedProcessingStatusList(), new mws.Timestamp('SubmittedFromDate'), new mws.Timestamp('SubmittedToDate')], {}, null, init);
      }

      return _Class;

    })(mws.Request),
    GetFeedSubmissionResult: (function(_super) {
      __extends(_Class, _super);

      function _Class(init) {
        _Class.__super__.constructor.call(this, MWS_FEEDS, "GetFeedSubmissionResult", [new mws.Param('FeedSubmissionId', true)], {}, null, init);
      }

      return _Class;

    })(mws.Request),
    SubmitFeed: (function(_super) {
      __extends(_Class, _super);

      function _Class(init, body) {
        var _ref;
        _Class.__super__.constructor.call(this, MWS_FEEDS, "SubmitFeed", [new mws.Param('FeedType', true), new mws.ParamList('MarketplaceIdList', 'Id'), new mws.Bool('PurgeAndReplace')], {}, (_ref = body != null ? body : init != null ? init.body : void 0) != null ? _ref : null, init);
      }

      _Class.prototype.attachFile = function(filename, format, encoding, cb) {
        var _ref,
          _this = this;
        if (format == null) {
          if (/\.xml$/gi.test(filename) || (_ref = this.FeedType != null, __indexOf.call(types.FeedTypes.XML, _ref) >= 0)) {
            format = "text/xml";
          } else {
            format = "text";
          }
        }
        if (typeof cb === 'function') {
          return fs.readFile(filename, encoding, function(err, data) {
            if (err) {
              throw err;
            } else {
              return _this.attach(data, format, e);
            }
          });
        } else {
          return this.attach(fs.readFileSync(filename, format));
        }
      };

      return _Class;

    })(mws.Request)
  };

  FeedsClient = (function(_super) {
    __extends(FeedsClient, _super);

    function FeedsClient() {
      this.submitFeed = __bind(this.submitFeed, this);
      _ref = FeedsClient.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    FeedsClient.prototype.getServiceStatus = function(cb) {
      var _this = this;
      return this.invoke(new requests.GetServiceStatus(), {}, function(res) {
        var status, _ref1, _ref2;
        status = (_ref1 = (_ref2 = res.result) != null ? _ref2.Status : void 0) != null ? _ref1 : null;
        if (typeof cb === 'function') {
          return cb(status, res);
        }
      });
    };

    FeedsClient.prototype.cancelFeedSubmissions = function(submissionIds, feedTypes, submittedFrom, submittedTo, cb) {
      var req,
        _this = this;
      req = new requests.CancelFeedSubmissions({
        FeedSubmissionIdList: submissionIds != null ? submissionIds : [],
        FeedTypeList: feedTypes != null ? feedTypes : [],
        SubmittedFromDate: submittedFrom,
        SubmittedToDate: submittedTo
      });
      return this.invoke(req, {}, function(res) {
        if (typeof cb === 'function') {
          return cb(res);
        }
      });
    };

    FeedsClient.prototype.getFeedSubmissionList = function(options, cb) {
      var req,
        _this = this;
      if (options == null) {
        options = {};
      }
      req = new requests.GetFeedSubmissionList(options);
      return this.invoke(req, {
        nextTokenCall: requests.GetFeedSubmissionListByNextToken
      }, function(res) {
        if (typeof cb === 'function') {
          return cb(res);
        }
      });
    };

    FeedsClient.prototype.getFeedSubmissionListByNextToken = function(token, cb) {
      var req,
        _this = this;
      req = new requests.GetFeedSubmissionListByNextToken({
        NextToken: token
      });
      return this.invoke(req, {
        nextTokenCall: requests.GetFeedSubmissionListByNextToken
      }, function(res) {
        if (typeof cb === 'function') {
          return cb(res);
        }
      });
    };

    FeedsClient.prototype.getFeedSubmissionCount = function(feedTypes, statusList, submittedFrom, submittedTo, cb) {
      var req,
        _this = this;
      req = new requests.GetFeedSubmissionCount({
        FeedTypeList: feedTypes,
        FeedProcessingStatusList: statusList,
        SubmittedFromDate: submittedFrom,
        SubmittedToDate: submittedTo
      });
      return this.invoke(req, {}, function(res) {
        if (typeof cb === 'function') {
          return cb(res);
        }
      });
    };

    FeedsClient.prototype.getFeedSubmissionResult = function(id, cb) {
      var req,
        _this = this;
      req = new requests.GetFeedSubmissionResult({
        FeedSubmissionId: id
      });
      return this.invoke(req, {}, function(res) {
        if (typeof cb === 'function') {
          return cb(res);
        }
      });
    };

    FeedsClient.prototype.submitFeed = function(feedType, feedBody, marketplaces, purgeReplace, cb) {
      var req, _ref1,
        _this = this;
      if (purgeReplace == null) {
        purgeReplace = false;
      }
      req = new requests.SubmitFeed({
        FeedType: feedType,
        MarketplaceIdList: (_ref1 = marketplaces != null ? marketplaces : this.marketplaceIds) != null ? _ref1 : [this.marketplaceId],
        PurgeAndReplace: purgeReplace
      }, feedBody);
      return this.invoke(req, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/xml'
        }
      }, function(res) {
        if (typeof cb === 'function') {
          return cb(res);
        }
      });
    };

    return FeedsClient;

  })(mws.Client);

  module.exports = {
    service: MWS_FEEDS,
    enums: enums,
    types: types,
    requests: requests,
    Client: FeedsClient
  };

}).call(this);
