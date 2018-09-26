import ModalRaw from './ModalRaw.js';
import UpgradeItem from './UpgradeItem.js';
import PanelUpgrade from './PanelUpgrade.js';

window.PIXI = require('../js/libs/pixi.min');
window.p2 = require('../js/libs/p2.min');
window.Phaser = require('../js/libs/phaser-split.min');

const LEVEL = {
  aWidth: 537,
  aHeight: 178,
  desHeight: 85
};

function getFontStyle (fSize, color, align, weight) {
  return {
    fontWeight: weight || 'bold',
    fontSize: fSize,
    fill: color || '#3A0A00', // '#00FF00',
    boundsAlignH: 'center',
    boundsAlignV: 'middle',
    align: align || 'left'
  };
}

/*
opts = {
  avatarImg: <key>,
  avatarHeading: string,
  avatarDes: string,
  item1Icon: <key>,
  item1Des: string
}
*/

class ModalLevel extends ModalRaw {
  constructor({game, headingTxt, scrollable, opts}) {
    // parems
    super(game, headingTxt, undefined, undefined, scrollable);
    this.opts = opts;
    this.currDollar = '59aa';
    this._getInit();
  }

  _getInit = () => {
    this._positionModal();
    this._createOuterVeil();
    this._DrawSubGroupStuff();

    this._setMask4ContentGroup();
    /* real content goes here */
    this.getContextGroupInit();

    this._addStuff2SubGroup();
    this._addStuff2Modal();

    this._boostInputPriority4Children();
    // prep for scrolling, should be called after contentGroup is all set
    this._getScrollWhenNeeded();
  }

  getContextGroupInit = () => {
    // 添加的东西 y 要 >= this.headingH
    const OFFSET = this.headingH;
    this.avatarBg = this.game.make.graphics((this.w - LEVEL.aWidth) / 2, OFFSET); // graphics( [x] [, y] )
    this.avatarBg.beginFill(0x000000, 0.1);
    this.avatarBg.drawRect(0, 0, LEVEL.aWidth, LEVEL.aHeight);
    this.avatarBg.endFill();

    this.avatarGroup = this.game.add.group(this.avatarBg);
    this.avatar = this.game.make.image(40, 110, this.opts.avatarImg);
    this.avatarHeading = this.game.make.text(60 + this.avatar.width, 120, this.opts.avatarHeading, getFontStyle('24px'));
    this.avatarDesBg = this.game.make.graphics(0, 0);
    this.avatarDesBg.beginFill(0x000000, 0.1);
    this.avatarDesBg.drawRect(0, 0, 339, 30);
    this.avatarDesBg.endFill();
    this.avatarDesBg.alignTo(this.avatarHeading, Phaser.BOTTOM_LEFT, 0, 10);
    this.avatarDesTxt = this.game.make.text(0, 0, this.opts.avatarDes, getFontStyle('18px', 'white'));
    this.avatarDesTxt.setTextBounds(0, 0, 339, 30); // 同上
    this.avatarDesTxt.alignTo(this.avatarDesBg, Phaser.Phaser.TOP_LEFT, 0, -28);

    this.avatarBar = this.game.make.graphics(0, 0);
    this.avatarBar.beginFill(0x3A0A00, 0.8);
    this.avatarBar.drawRect(0, 0, 339, 30);
    this.avatarBar.endFill();
    this.avatarBar.alignTo(this.avatarHeading, Phaser.BOTTOM_LEFT, 0, 70);

    this.avatarBarGained = this.game.make.graphics(0, 0);
    this.avatarBarGained.beginFill(0x38ec43, 1);
    this.avatarBarGained.drawRect(0, 0, 139, 30);
    this.avatarBarGained.endFill();
    this.avatarBarGained.alignTo(this.avatarHeading, Phaser.BOTTOM_LEFT, 0, 70);

    this.avatarArrow = this.game.make.image(0, 0, 'arrow_levelUp');
    this.avatarArrow.alignIn(this.avatarBarGained, Phaser.BOTTOM_LEFT, 10);

    this.avatarGroup.addChild(this.avatar);
    this.avatarGroup.addChild(this.avatarHeading);
    this.avatarGroup.addChild(this.avatarDesBg);
    this.avatarGroup.addChild(this.avatarDesTxt);
    this.avatarGroup.addChild(this.avatarBar);
    this.avatarGroup.addChild(this.avatarBarGained);
    this.avatarGroup.addChild(this.avatarArrow);

    this.desGroup = this.game.add.group();
    // gap 16
    let item1 = new UpgradeItem({
      game: this.game,
      parent: this.contentGroup,
      key: this.opts.item1Icon,
      txt: this.opts.item1Des,
      x: (this.w - LEVEL.aWidth) / 2,
      y: 290,
      currTxt: '58aa/分',
      futureTxt: '+55aa/分'
    });
    let item2 = new UpgradeItem({
      game: this.game,
      parent: this.contentGroup,
      key: 'icon_transporter',
      txt: '运输工',
      x: (this.w - LEVEL.aWidth) / 2,
      y: 290 + 85 + 17,
      currTxt: '9',
      futureTxt: '+0'
    });

    let item3 = new UpgradeItem({
      game: this.game,
      parent: this.contentGroup,
      key: 'icon_transporter_capacity',
      txt: '运输工能力',
      x: (this.w - LEVEL.aWidth) / 2,
      y: 290 + 85 * 2 + 17 * 2,
      currTxt: '58aa',
      futureTxt: '+55ac'
    });

    let item4 = new UpgradeItem({
      game: this.game,
      parent: this.contentGroup,
      key: 'icon_loading_speed',
      txt: '运输工载运能力',
      x: (this.w - LEVEL.aWidth) / 2,
      y: 290 + 85 * 3 + 17 * 3,
      currTxt: '18.4aa/秒',
      futureTxt: '+55aa/秒'
    });

    let item5 = new UpgradeItem({
      game: this.game,
      parent: this.contentGroup,
      key: 'icon_walk_speed',
      txt: '运输工行走速度',
      x: (this.w - LEVEL.aWidth) / 2,
      y: 290 + 85 * 4 + 17 * 4,
      currTxt: '0.10米/分',
      futureTxt: '+0.01米/分'
    });

    let upgradeBtns = new PanelUpgrade({
      game: this.game,
      parent: this.contentGroup
    });

    this.btnUpgrade = this.game.make.image(0, 0, 'btn_level_upgrade');
    this.btnUpgrade.alignTo(upgradeBtns, Phaser.RIGHT_BOTTOM, 75);
    this.txtCurrDollar = this.game.make.text(0, 0, this.currDollar, getFontStyle('24px', 'white', 'center', 'normal'));
    this.txtCurrDollar.alignTo(upgradeBtns, Phaser.RIGHT_TOP, 140, -7);

    this.contentGroup.addChild(this.avatarBg);
    this.contentGroup.addChild(this.avatarGroup);
    this.contentGroup.addChild(this.btnUpgrade);
    this.contentGroup.addChild(this.txtCurrDollar);
  }

}

export default ModalLevel;
