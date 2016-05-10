"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
var exports = {
    wizard: '',
    wizardStep: '',
    getInfo: function () {
        return this.wizard;
    }
}


Object.defineProperty(exports, "__esModule", {
  value: true
});
// import dependencies

 _interopRequire("./wizard.scss");

var wizardTemplate;

var wizardSteptemplate;

var vsIcon = _interopRequire("vuestrap-icons/src/components/icons");

var changeLocation = _interopRequire("./helpers.js").changeLocation;


jQuery.get('/static/wizard.html', function(data) {
    wizardTemplate = data;
});

jQuery.get('/static/wizard-step.html', function(data) {
    wizardSteptemplate = data;
});


// export component object
var wizard = {
  template: wizardTemplate,
  replace: true,
  props: {
    currentIndex: {
      type: Number,
      "default": 0 }
  },
  data: function data() {
    return {
      countItems: 0 };
  },
  methods: {
    changeCurrentIndex: function changeCurrentIndex(index) {
      // change currentIndex
      // if previous step is valid
      // if previousDisabled is not set on the current step
      if (this.$children[this.currentIndex].disablePrevious && this.currentIndex > index) {
        return false;
      }if (this.$children[index - 1] && this.$children[index - 1].valid || index < this.currentIndex) {
        this.currentIndex = index;
        return true;
      }
      return false;
    } },
  ready: function ready() {
    // get all steps
    this.countItems = this.$children.length;

    // set index for each wiard-step component
    this.$children.forEach(function (item, index) {
      item.index = index;
    });
  }
};

exports.wizard = wizard;
var wizardStep = {
  template: wizardSteptemplate,
  replace: true,
  data: function data() {
    return {
      index: null,
      active: false };
  },
  computed: {
    isActive: function isActive() {
      return this.$parent.currentIndex === this.index;
    },
    isPrevious: function isPrevious() {
      // every step before current index
      return this.$parent.currentIndex > this.index;
    },
    isNext: function isNext() {
      // everything after current index
      return this.$parent.currentIndex < this.index;
    }
  },
  props: {
    link: {
      type: String,
      "default": "" },
    icon: {
      type: String,
      "default": false },
    iconNumber: {
      type: String,
      "default": false },
    title: {
      type: String,
      "default": false },
    description: {
      type: String,
      "default": false },
    progress: {
      type: Number,
      "default": 0 },
    valid: {
      type: Boolean,
      "default": false },
    disablePrevious: {
      type: Boolean,
      "default": false } },
  methods: {
    changeCurrentIndex: function changeCurrentIndex() {
      if (this.$parent.changeCurrentIndex(this.index) && this.link) {
        // redirect user to the new location
        changeLocation(this.$router, this.link);
      }
    } },
  watch: {
    progress: function progress(val) {
      this._progressBar.style.width = val + "%";
      if (val === 100) {
        this.valid = true;
      } else {
        this.valid = false;
      }
    },
    valid: function valid(val) {
      if (val) {
        this.progress = 100;
      }
    }
  },
  components: {
    vsIcon: vsIcon },
  ready: function ready() {
//    this._progressBar = this.$el.querySelector(".wizard-progress-value");
  }
};

exports.wizardStep = wizardStep;
new Vue({ components: { 'vs-wizard' : wizard }})
new Vue({ components: { 'vs-wizard-step' : wizardStep }})
Vue.component('vs-wizard',wizard);
Vue.component('vs-wizard-step',wizardStep); 
