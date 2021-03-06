﻿ko.bindingHandlers.progress = {
    defaults: {
        css: 'progress',
        text: '',
        textHidden: true,
        striped: false,
        type: '',
        animated: false
    },

    init: function (element, valueAccessor) {
        var $element = $(element),
            value = valueAccessor(),
            unwrappedValue = ko.unwrap(value),
            defs = ko.bindingHandlers.progress.defaults,
            model;

        if(unwrappedValue instanceof Array) {
            model = unwrappedValue.map(function(val) {
                return normalize(val);
            });
        } else {
            model = [normalize(value)];
        }

        ko.renderTemplate('progress', model, { templateEngine: ko.stringTemplateEngine.instance }, element);

        $element.addClass(defs.css);

        return { controlsDescendantBindings: true };
    },
};

function normalize(value) {
    var unwrappedValue = ko.unwrap(value);
    
    if (typeof unwrappedValue === 'number') {
        return new ProgressBar({ value: value });
    } else if (typeof ko.unwrap(unwrappedValue.value) === 'number') {
        return new ProgressBar(unwrappedValue);
    } else {
        throw new Error('progress binding can accept only numbers or objects with "value" number property');
    }
}

function ProgressBar(data) {
    var self = this;

    $.extend(self, ko.bindingHandlers.progress.defaults, data);

    self.barWidth = ko.computed(function() {
        return ko.unwrap(self.value) + '%';
    });

    self.barType = ko.computed(function() {
        var type = ko.unwrap(self.type);
        
        return type ? 'progress-bar-' + type : '';
    });
}