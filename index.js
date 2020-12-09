const { Plugin } = require('powercord/entities');

module.exports = class HejDzieci extends Plugin {
  constructor () {
    super();
    this.URLs = [
      'https://cdn.discordapp.com/attachments/762316482465234944/774171556598775838/FB_IMG_1472858159864.jpg',
      'https://cdn.discordapp.com/attachments/762316482465234944/774174113207287808/d0.jpg',
      'https://cdn.discordapp.com/attachments/762316482465234944/774174485178744832/14581376_181031562340858_3025445020510020841_n.jpg',
      'https://cdn.discordapp.com/attachments/774174178223063080/774175331803332638/14492415_759233150846072_7848376552093195742_n.jpg',
      'https://cdn.discordapp.com/attachments/774174178223063080/774214991875407882/110.jpg',
      'https://cdn.discordapp.com/attachments/774174178223063080/774215120959176754/tenorqq.gif',
      'https://cdn.discordapp.com/attachments/762316482465234944/774235940700291082/comment_iynUGBk4F0FsNhFSFL81o6BGIpijkNa6.jpg',
      'https://media.discordapp.net/attachments/762316482465234944/774250019582115850/130770926853.png?width=101&height=125',
      'https://cdn.discordapp.com/attachments/762316482465234944/774253707297554453/FB_IMG_1472828631141.jpg',
      'https://cdn.discordapp.com/attachments/762316482465234944/775272422403211274/comment_vnWH5CaZfaaISwWB0ZC4PrIZ7f7yoPJT.jpg',
      'https://cdn.discordapp.com/attachments/762316482465234944/775272824930697236/1v9nlbnq.vichan.png',
      'https://cdn.discordapp.com/attachments/762316482465234944/775272983983816735/papiesz_pedau_61.jpg',
      'https://cdn.discordapp.com/attachments/762316482465234944/775273056251805696/11209662_941791882519692_6001176671010114304_n.jpg',
      'https://cdn.discordapp.com/attachments/762316482465234944/775302071225286676/f45a222edfa1.gif',
      'https://cdn.discordapp.com/attachments/762316482465234944/775311977735258122/DSC_5953.jpg',
      'https://cdn.discordapp.com/attachments/762316482465234944/776397565108289546/10635891_527591224040543_706369033957352936_n.jpg',
      'https://cdn.discordapp.com/attachments/762316482465234944/776399229953900594/1sirr11g.vichan.gif',
      'https://cdn.discordapp.com/attachments/778154906674528258/781057070857191424/16473543_1831711613763615_6839193872644016994_n.jpg',
      'https://cdn.discordapp.com/attachments/774174178223063080/786222411598004275/daa3hwr.png',
      'https://cdn.discordapp.com/attachments/774174178223063080/786222477134790696/14641977_173094463139116_8374569540174015746_n.jpg',
      'https://cdn.discordapp.com/attachments/774174178223063080/786222546752241714/29468969_352375938612366_6259239334348587008_n.jpg',
      'https://cdn.discordapp.com/attachments/774174178223063080/786222718395351070/10513348_532135780278912_1867278942536709016_n.jpg',
      'https://cdn.discordapp.com/attachments/774174178223063080/786222857939189780/PicsArt_10-17-10.00.29_wm.jpg',
      'https://cdn.discordapp.com/attachments/774174178223063080/786222925158154240/Screenshot_2018-12-02-00-01-45-1.png',
      'https://cdn.discordapp.com/attachments/774174178223063080/786222902521233408/5812_b986-jpeg.jpg',
    ];
  }

  startPlugin () {
    powercord.api.commands.registerCommand({
      command: 'hejsenko',
      description: 'Podmienia każdy obrazek na ekranie z papieżem',
      usage: '{c}',
      executor: this.heysenko.bind(this)
    })
  }

  pluginWillUnload () {
    powercord.api.commands.unregisterCommand('command-name')
  }

  getRandomURL () {
    return this.URLs[Math.floor(Math.random() * this.URLs.length)];
  }

  heysenko () {
    document.querySelectorAll('[style*="background-image"]')
      .forEach(({ style }) => (
        style.backgroundImage = `url("${this.getRandomURL()}")`
      ));

    document.querySelectorAll('img')
      .forEach(image => (
        image.src = this.getRandomURL()
      ));
  }
};
