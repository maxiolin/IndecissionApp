"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var IndecisionApp = /*#__PURE__*/function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  var _super = _createSuper(IndecisionApp);

  function IndecisionApp() {
    _classCallCheck(this, IndecisionApp);

    return _super.apply(this, arguments);
  }

  _createClass(IndecisionApp, [{
    key: "render",
    value: function render() {
      var app = {
        options: ['Correr', 'Saltar', 'Bailar']
      };
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(Action, {
        options: app.options
      }), /*#__PURE__*/React.createElement(Options, {
        options: app.options
      }), /*#__PURE__*/React.createElement(AddOptions, null));
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header = /*#__PURE__*/function (_React$Component2) {
  _inherits(Header, _React$Component2);

  var _super2 = _createSuper(Header);

  function Header() {
    _classCallCheck(this, Header);

    return _super2.apply(this, arguments);
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Indecision App"), /*#__PURE__*/React.createElement("h2", null, "Put your life in the hands of a computer"));
    }
  }]);

  return Header;
}(React.Component);

var Action = /*#__PURE__*/function (_React$Component3) {
  _inherits(Action, _React$Component3);

  var _super3 = _createSuper(Action);

  function Action() {
    _classCallCheck(this, Action);

    return _super3.apply(this, arguments);
  }

  _createClass(Action, [{
    key: "handlePick",
    value: function handlePick() {
      var option = this.props.options[Math.floor(Math.random() * this.props.options.length)];
      alert(option);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
        onClick: this.handlePick.bind(this)
      }, "What should I do?"));
    }
  }]);

  return Action;
}(React.Component);

var Options = /*#__PURE__*/function (_React$Component4) {
  _inherits(Options, _React$Component4);

  var _super4 = _createSuper(Options);

  function Options() {
    _classCallCheck(this, Options);

    return _super4.apply(this, arguments);
  }

  _createClass(Options, [{
    key: "handleRemoveAll",
    value: function handleRemoveAll() {
      alert('remove all');
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
        onClick: this.handleRemoveAll.bind(this)
      }, "Remove All"), this.props.options.length > 0 && this.props.options.map(function (option, index) {
        return /*#__PURE__*/React.createElement(Option, {
          content: option,
          key: index
        });
      }));
    }
  }]);

  return Options;
}(React.Component);

var Option = /*#__PURE__*/function (_React$Component5) {
  _inherits(Option, _React$Component5);

  var _super5 = _createSuper(Option);

  function Option() {
    _classCallCheck(this, Option);

    return _super5.apply(this, arguments);
  }

  _createClass(Option, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("p", null, this.props.content);
    }
  }]);

  return Option;
}(React.Component);

var AddOptions = /*#__PURE__*/function (_React$Component6) {
  _inherits(AddOptions, _React$Component6);

  var _super6 = _createSuper(AddOptions);

  function AddOptions() {
    _classCallCheck(this, AddOptions);

    return _super6.apply(this, arguments);
  }

  _createClass(AddOptions, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();

      if (option) {
        alert(option);
      }

      e.target.elements.option.value = '';
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("form", {
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        placeholder: "Add new option here",
        name: "option"
      }), /*#__PURE__*/React.createElement("button", null, "Add"));
    }
  }]);

  return AddOptions;
}(React.Component);

var appRoot = document.getElementById('app');
ReactDOM.render( /*#__PURE__*/React.createElement(IndecisionApp, null), appRoot);
