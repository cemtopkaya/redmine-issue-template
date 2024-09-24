document.addEventListener('DOMContentLoaded', function () {
  // Düğmeyi oluştur
  var btnTemplates = document.createElement('button');
  btnTemplates.id = 'btnTemplates';
  btnTemplates.innerHTML = '<i class="fa fa-asterisk" aria-hidden="true"></i>';
  btnTemplates.style.marginLeft = '5px';

  let menu = createMenu();

  // Düğmeye tıklandığında menüyü göster/gizle
  btnTemplates.onclick = function (event) {
    event.preventDefault();
    var rect = btnTemplates.getBoundingClientRect();
    let top = rect.bottom;
    let left = rect.left;
    placeMenu(menu, top, left);
    // menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
    showMenu();
  };

  // Sayfa tıklandığında menüyü gizle
  document.addEventListener('click', function (event) {
    if (!btnTemplates.contains(event.target) && !menu.contains(event.target)) {
      hideMenu();
    }
  });

  // Düğmeyi sayfaya ekle
  var toolbarElements = document.querySelector('.jstElements');
  if (toolbarElements) {
    toolbarElements.appendChild(btnTemplates);
  }

  function createMenu() {
    // Şablonlar
    let templates = new Map();
    templates.set("Bug", `### Hatanın Gözlemlendiği Durum


### Hatayı Tekrarlamak İçin Yapılacaklar
- 

### Kabul Kriterleri
- `);
    templates.set("Feature", `### İsterin Sebebi


### Yapılacaklar
- 

### Kabul Kriterleri
- `);

    let applyTemplate = function (key) {
      var description = document.getElementById('issue_description');
      if (description.value.trim() !== "") {
        if (!confirm("Var olan açıklama üzerine yazılacak. Devam etmek istiyor musunuz?")) {
          return;
        }
      }
      description.value = templates.get(key);
    }

    let fnTemplateSelected = function (event) {
      console.log("Template clicked")
      event.preventDefault();
      let issueType = this.getAttribute('data-type');
      applyTemplate(issueType);
      hideMenu();
    };

    // Açılır menüyü button'un altında görünür olacak şekilde oluştur
    let menu = document.createElement('ul');
    menu.style.position = 'absolute';
    menu.style.backgroundColor = '#f9f9f9';
    menu.style.boxShadow = '0px 8px 16px 0px rgba(0,0,0,0.2)';
    menu.style.padding = '2px 2px';
    menu.style.display = 'none';
  
    // menu.style.zIndex = '1';

    // loop through the map anc create a menu item for each template
    templates.forEach((value, key) => {
      let option = document.createElement('a');
      option.innerHTML = `${key.charAt(0).toUpperCase() + key.slice(1)} Template`;
      option.href = '#';
      option.style.display = 'block';
      option.style.padding = '2px 2px';
      option.setAttribute('data-type', key);
      option.onclick = fnTemplateSelected;
      menu.appendChild(option);
    });

    return menu;
  }

  function placeMenu(menu, top, left) {
    // menüyü sayfaya ekle
    var toolbarBlock = document.querySelector('.jstBlock');
    if (toolbarBlock) {
      toolbarBlock.appendChild(menu);
      menu.style.top = top + 'px';
      menu.style.left = left + 'px';
    }
  }

  function hideMenu() {
    menu.style.display = 'none';
  }

  function showMenu() {
    menu.style.display = 'block';
  }
});