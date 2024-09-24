document.addEventListener('DOMContentLoaded', function () {
  let templates = new Map();
  templates.set("bug", `### Hatanın Gözlemlendiği Durum


### Hatayı Tekrarlamak İçin Yapılacaklar
- 

### Kabul Kriterleri
- `);
  templates.set("feature", `### İsterin Sebebi


### Yapılacaklar
- 

### Kabul Kriterleri
- `);

  // Düğmeyi oluştur
  var btnTemplates = document.createElement('button');
  btnTemplates.id = 'btnTemplates';
  btnTemplates.innerHTML = '<i class="fa fa-asterisk" aria-hidden="true"></i>';
  btnTemplates.style.marginLeft = '10px';

  // Açılır menüyü button'un altında görünür olacak şekilde oluştur
  var menu = document.createElement('ul');
  menu.style.display = 'none';
  menu.style.position = 'absolute';
  menu.style.backgroundColor = '#f9f9f9';
  menu.style.boxShadow = '0px 8px 16px 0px rgba(0,0,0,0.2)';
  menu.style.padding = '2px 2px';
  // menu.style.zIndex = '1';

  var featureOption = document.createElement('a');
  featureOption.innerHTML = 'Feature Template';
  featureOption.href = '#';
  featureOption.style.display = 'block';
  featureOption.style.padding = '2px 2px';
  featureOption.setAttribute('data-type', 'feature');

  var bugOption = document.createElement('a');
  bugOption.innerHTML = 'Bug Template';
  bugOption.href = '#';
  bugOption.style.display = 'block';
  bugOption.style.padding = '2px 2px';
  bugOption.setAttribute('data-type', 'bug');

  // Menü seçeneklerine tıklandığında şablonları uygula
  featureOption.onclick = templateSelected;
  bugOption.onclick = templateSelected;

  function templateSelected(event) {
    console.log("Template clicked")
    event.preventDefault();
    let issueType = this.getAttribute('data-type');
    applyTemplate(issueType);
    menu.style.display = 'none';
  };

  menu.appendChild(featureOption);
  menu.appendChild(bugOption);

  // Düğmeyi ve menüyü sayfaya ekle
  var toolbarElements = document.querySelector('.jstElements');
  if (toolbarElements) {
    toolbarElements.appendChild(btnTemplates);
  }

  var toolbarBlock = document.querySelector('.jstBlock');
  if (toolbarBlock) {
    toolbarBlock.appendChild(menu);

    var rect = btnTemplates.getBoundingClientRect();
    menu.style.top = rect.bottom + 'px';
    menu.style.left = rect.left + 'px';
  }

  // Düğmeye tıklandığında menüyü göster/gizle
  btnTemplates.onclick = function (event) {
    event.preventDefault();
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
  };

  // Şablon fonksiyonları
  function applyTemplate(key) {
    var description = document.getElementById('issue_description');
    description.value = templates.get(key);
  }
});