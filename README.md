# Siglapse
A small learning experiment for making a simple and light weight collapse with build in accessibility.

## Usage
```javascript
  (function(){
    const options = {
      selector: ".collapse",
      onInit: someInitFunction,
      beforeToggle: beforeToggleFunction,
      onToggle: onToggleFunction,
      afterToggle: afterToggleFunction
    };
    const siglapse = new Siglapse(options);
    siglapse.init();

    function someInitFunction(){
      console.log("Custom function running on init.");
    }

    function beforeToggleFunction(){
      console.log("Custom function running before toggle");
    }

    function onToggleFunction(){
      console.log("Custom function running on toggle");
      console.log(siglapse.trigger);
    }

    function afterToggleFunction(){
      console.log("Custom function running after toggle");
    }

  })();´´´
