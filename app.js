class Siglapse {
  constructor(options){
    // Todo: default options
    this.options = options;

    // elements
    this.trigger;
    this.body;
  }

  init(){
    const els =  document.querySelectorAll(this.options.selector);

    if(els.length > 0){
      for (var i = 0; i < els.length; i++) {
        const el = els[i];

        const trigger = el.querySelector(this.options.selector + "-trigger");
        const body = el.querySelector(this.options.selector + "-body");
        const uniqueId = "siglapse-" + (i + 1);

        this.trigger = trigger;
        this.body = body;

        this.setup(el, trigger, body, uniqueId);

        if(this.options.onInit){
          this.options.onInit();
        }

        trigger.addEventListener("click", (e) => {
          if(this.options.beforeToggle){
            this.options.beforeToggle();
          }
          e.preventDefault();
          this.toggle(trigger, body);

          if(this.options.afterToggle){
            this.options.afterToggle();
          }
        });
      }
    }
  }

  setup(el, trigger, body, id){
    if(trigger.getAttribute("href") !== null){
      body.setAttribute("id", trigger.getAttribute("href").split("#")[1]);
    } else {
      trigger.setAttribute("href", "#" + id);
      body.setAttribute("id", id);
    }
    trigger.setAttribute("aria-controls", id);
    trigger.setAttribute("aria-expanded", "false");
    body.setAttribute("aria-hidden", "true");
    body.style.display = "none";
  }

  toggle(trigger, body){
    if(this.options.onToggle){
      this.options.onToggle();
    }
    (body.style.display === "none") ? body.style.display = "block" : body.style.display = "none";
    this.toggleAttribute(trigger, "aria-expanded");
    this.toggleAttribute(body, "aria-hidden");
  }

  toggleAttribute(el, attribute){
    el.setAttribute(attribute, (el.getAttribute(attribute) === "true") ? "false" : "true");
  }
}
