// PhilippeLavoie.com
// by Philippe Lavoie (obviously!)

window.PL = window.PL || {};

(function (Home, $, undefined) {

// Public Properties
Home.ViewModel = null;

Home.Initialize = function() {
	Home.ViewModel = new HomeViewModel();

	// Activates knockout.js
	ko.applyBindings(Home.ViewModel);

	Home.ViewModel.init();
}

} (PL.Home = PL.Home || {}, $));


function HomeViewModel() {
	var self = this;

	self.IsFrench = ko.observable(true);

	self.Core = ko.observable(new CoreViewModel());
	self.HoublonVa = ko.observable(new HoublonVaViewModel());
	self.DramProject = ko.observable(new DramProjectViewModel());


	self.init = function () {
		self.Core().init(self.IsFrench());
		self.HoublonVa().init(self.IsFrench());
		self.DramProject().init(self.IsFrench());	

		$("#frame").popover({trigger: 'click', html: true, content: self.Core().Info});
	}

	self.Refresh = function () {
		self.Core().Refresh(self.IsFrench());
		self.HoublonVa().Refresh(self.IsFrench());
		self.DramProject().Refresh(self.IsFrench());	
	}

	self.ToggleLanguage = function () {
		if (self.IsFrench()) {
			self.IsFrench(false);
			self.Core().OppositeLanguageLabel("Français");
		}
		else {
			self.IsFrench(true);
			self.Core().OppositeLanguageLabel("English");
		}

		self.Refresh();
	}
}

function CoreViewModel() {
	var self = this;

	self.OppositeLanguageLabel = ko.observable();
	self.MoreDetailsLabel = ko.observable();
	self.BackToTop = ko.observable();
	self.Info = ko.observable();
	self.Photograph = ko.observable();
	self.PhotographDescription = ko.observable();
	self.Profession = ko.observable();
	self.ProfessionDescription = ko.observable();

	self.init = function () {
		self.Refresh(true);
	}

	self.Refresh = function (isFrench) {
		// Short
		self.OppositeLanguageLabel(isFrench ? "English" : "Français");
		self.MoreDetailsLabel(isFrench ? "Plus d'info »" : "More details »");
		self.BackToTop(isFrench ? "Retourner en haut" : "Back to top");
		self.Photograph(isFrench ? "Photographe <span class='text-muted'>amateur</span>" : "<span class='text-muted'>Amateur</span> Photographer");
		self.Profession(isFrench ? "Développeur .NET et SharePoint <span class='text-muted'>chez <a href='http://gsoft-group.com'>GSoft</a></span>" : ".NET and SharePoint Developer <span class='text-muted'>at <a href='http://gsoft-group.com'>GSoft</a></span>");

		// Long
		if (isFrench) {
			var info = "<ul>\
          				    <li><strong>Profession</strong>: Ingénieur informatique</li>\
          				    <li><strong>Lieu</strong>: Montréal, Canada</li>\
          			    </ul>\
          			    <div class='social linkedin'>\
          			    	<a href='http://www.linkedin.com/in/philippelavoie'><img src='images/linkedkin-icon-30.png' alt='linkedin'/></a>\
          			    </div>\
          			    <div class='social facebook'>\
          			    	<a href='https://www.facebook.com/philavoie'><img src='images/facebook-icon-30.png' alt='facebook'/></a>\
          			    </div>\
          			    <div class='social twitter'>\
          			    	<a href='https://twitter.com/philavoie'><img src='images/twitter-icon-30.png' alt='twitter'/></a>\
          			    </div>\
          			    <div class='social googleplus'>\
          			    	<a href='https://plus.google.com/102994376932042618802'><img src='images/googleplus-icon-30.png' alt='twitter'/></a>\
          			    </div>\
          			    <div class='social stackoverflow'>\
          			    	<a href='http://stackoverflow.com/users/399769/philippe-lavoie'><img src='images/stackoverflow-icon-30.png' alt='twitter'/></a>\
          			    </div>\
          			    ";
			self.Info(info);
			self.PhotographDescription("J'ai une passion pour la photo depuis déjà quelques années. Je fais quelques contrats à temps partiel. Je vous invite à visiter ma gallerie.");
			self.ProfessionDescription("Je développe des solutions d'intranet, de portail et de site web sur mesure sur la plateforme SharePoint.");
		}
		else {
			var info = "<ul>\
          			        <li><strong>Profession</strong>: Computer engineer</li>\
          			        <li><strong>Location</strong>: Montreal, Canada</li>\
          			    </ul>\
          			    <div class='social linkedin'>\
          			    	<a href='http://www.linkedin.com/in/philippelavoie'><img src='images/linkedkin-icon-30.png' alt='linkedin'/></a>\
          			    </div>\
          			    <div class='social facebook'>\
          			    	<a href='https://www.facebook.com/philavoie'><img src='images/facebook-icon-30.png' alt='facebook'/></a>\
          			    </div>\
          			    <div class='social twitter'>\
          			    	<a href='https://twitter.com/philavoie'><img src='images/twitter-icon-30.png' alt='twitter'/></a>\
          			    </div>\
          			    <div class='social googleplus'>\
          			    	<a href='https://plus.google.com/102994376932042618802'><img src='images/googleplus-icon-30.png' alt='twitter'/></a>\
          			    </div>\
          			    <div class='social stackoverflow'>\
          			    	<a href='http://stackoverflow.com/users/399769/philippe-lavoie'><img src='images/stackoverflow-icon-30.png' alt='twitter'/></a>\
          			    </div>\
          			    ";
			self.Info(info);
			self.PhotographDescription("I have a passion for photography for a couple years already. I do some part time jobs. I invite you to visit my gallery. Enjoy!");
			self.ProfessionDescription("I develop custom solutions for intranets, portals and web sites on the SharePoint framework.");

		}
	}
}

function HoublonVaViewModel() {
	var self = this;

	self.Title = ko.observable();
	self.Description = ko.observable();
	self.WebSiteUrl = ko.observable();
	self.PlayStoreUrl = ko.observable();
	self.Logo500 = ko.observable();

	self.init = function () {
		self.Title("Houblon va?");
		self.WebSiteUrl("http://houblonva.philippelavoie.com/");
		self.PlayStoreUrl("https://play.google.com/store/apps/details?id=com.philippelavoie.houblonva");
		self.Logo500("images/hv500.png");

		self.Refresh(true);
	}

	self.Refresh = function (isFrench) {
		// Short

		// Long
		if (isFrench) {
			self.Description("Houblon va? est une application web pour localiser la microbrasserie la plus proche de soi. Pour l'instant, seules les microbrasseries du Québec sont référenciées.");
		}
		else {
			self.Description("Houblon va? is a web application to find the closest microbrewery from you. Right now, it only have Québec's micros.");
		}
	}
}

function DramProjectViewModel() {
	var self = this;

	self.Title = ko.observable();
	self.Description = ko.observable();
	self.WebSiteUrl = ko.observable();
	self.Logo500 = ko.observable();

	self.init = function () {
		self.Title("The Dram Project");
		self.WebSiteUrl("http://dram.philippelavoie.com/");
		self.Logo500("images/dp397.png");

		self.Refresh(true);
	}

	self.Refresh = function (isFrench) {
		// Short
		// self.Something = isFrench ? "" : "";

		// Long
		if (isFrench) {
			self.Description("Le Dram Project est un petit site web qui sert de référence pour les notes de dégustation des scotch whisky les plus connus.");
		}
		else {
			self.Description("The Dram Project is a small reference web site where you can find the official tasting notes of the most common scotch whisky.");
		}
	}
}

PL.Home.Initialize();