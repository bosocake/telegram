var headerBar = document.querySelector('.header-bar');
var headerTopbar = document.querySelector('.header-topbar');
var headerSearchBar = document.querySelector('.header-search-bar');
var headerSearch = document.querySelector('.header-search');
var headerSearchClose = document.querySelector('.header-search-close');
var headerMenuBar = document.querySelector('.header-menu-bar');

var isTopbarHidden = false;

document.querySelector('.header-search').addEventListener('focus', function() {
	if (!isTopbarHidden) {
	// anime({
	// 	targets: headerBar,
	// 	translateY: '-50%',
	// 	duration: 250,
	// 	easing: 'linear',

	// });
	anime({
		targets: headerTopbar,
		opacity: '0',
		duration: 250,
		easing: 'linear',
		translateY: '-100%',
		
	});
	anime({
		targets: headerSearchBar,
		translateY: '-100%',
		duration: 250,
		easing: 'linear',
		paddingTop: '40px',

	});
	anime({
		targets: headerSearchClose,
		marginRight: '0%',
		opacity: '1',
		duration: 250,
		easing: 'linear',
	});
	anime({
		targets: headerMenuBar,
		opacity: '1',
		duration: 250,
		easing: 'linear',
		translateY: '-100%',
	});
	isTopbarHidden = true;
	}
});

document.querySelector('.header-search-close').addEventListener('click', function() {
	if (isTopbarHidden) {
	// anime({
	// 	targets: headerBar,
	// 	translateY: '0%',
	// 	duration: 250,
	// 	easing: 'linear',
		
	// });
	anime({
		targets: headerTopbar,
		opacity: '1',
		duration: 250,
		translateY: '0%',
		easing: 'linear',
		
	});
	anime({
		targets: headerSearchBar,
		translateY: '0%',
		duration: 250,
		easing: 'linear',
		paddingTop: '0',
	});
	anime({
		targets: headerSearchClose,
		marginRight: '-20%',
		duration: 250,
		easing: 'linear',
		opacity: '0',
	});
	anime({
		targets: headerMenuBar,
		opacity: '0',
		duration: 250,
		easing: 'linear',
		translateY: '0%',
	});
	isTopbarHidden = false;
	}
});

var menuBlocks = document.querySelectorAll('.header-menu');
var borderHighlight = document.querySelector('.border-highlight');
var headerMenu = document.querySelector('.header-menu');

// Функция для обработки события клика на блок меню
function handleClick(event) {
  // Удаляем класс active у всех блоков меню
  menuBlocks.forEach(function (block) {
    block.classList.remove('active');
  });

  // Добавляем класс active для выбранного блока меню
  event.target.classList.add('active');

  // Перемещаем и изменяем ширину нижней границы под активным блоком
  var blockRect = event.target.getBoundingClientRect();
  var menuRect = headerMenu.getBoundingClientRect();
  var leftOffset = blockRect.left - menuRect.left;
  var width = blockRect.width;
  borderHighlight.style.left = leftOffset + 'px';
  borderHighlight.style.width = width + 'px';
}

// Присваиваем обработчик события клика каждому блоку меню
menuBlocks.forEach(function (block) {
  block.addEventListener('click', handleClick);
});