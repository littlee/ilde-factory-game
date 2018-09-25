import BtnIdleCash from '../components/BtnIdleCash';
import BtnCash from '../components/BtnCash';
import BtnSuperCash from '../components/BtnSuperCash';

import Workstation from '../components/Workstation';

import Scroller from '../components/Scroller.js';

window.PIXI = require('../js/libs/pixi.min');
window.p2 = require('../js/libs/p2.min');
window.Phaser = require('../js/libs/phaser-split.min');

class Game extends window.Phaser.State {

  // create(): execution order inside MATTERS!!
  create() {
    // bg of warehouse of raw material
    this.bgGroup = this.game.add.group();
    // create the wall and 2 markets
    this._createWalln2markets();
    // ground 0
    this.exitGround = this.add.tileSprite(0, 674, this.world.width, 241, 'ground_level_1');
    this.warehouseManager = this.add.sprite(0, 0, 'mgr_warehouse');
    this.warehouseManager.alignIn(this.wall, window.Phaser.BOTTOM_CENTER, -80, 80);
    this.marketManager = this.add.sprite(0, 0, 'mgr_market');
    this.marketManager.alignIn(this.wall, window.Phaser.BOTTOM_CENTER, 80, 80);
    // group 1-5
    /* eslint-disable */
    this.workStation1 = new Workstation(this.game, 0, 915, 1, 1);
    this.workStation2 = new Workstation(this.game, 0, 915 + 339, 1, 2);
    this.workStation3 = new Workstation(this.game, 0, 915 + 339 * 2, 1, 3);
    this.workStation4 = new Workstation(this.game, 0, 915 + 339 * 3, 1, 4);
    this.workStation5 = new Workstation(this.game, 0, 915 + 339 * 4, 1, 5);
    /* eslint-enable */

    // menus should be the last to add
    this._createMenus();
    // add stuff to bg to enable scroll
    this._addAllRelatedStuff2Bg();
    // with bg fills with stull, scrolling now is all set
    let gameGroup = new Scroller({
      targetToScroll: this.bgGroup,
      priority: 0,
    });
    gameGroup.enableScroll();
  }

  _createMenus = () => {
    // top and bottom menu bar
    this.menuTop = this.add.graphics();
    this.menuTop.beginFill(0x282c30);
    this.menuTop.drawRect(0, 0, this.world.width, 81);
    this.menuTop.endFill();

    this.btnIdleCash = new BtnIdleCash(this.game, 0, 0);
    this.btnCash = new BtnCash(this.game, 186, 0);
    this.btnSuperCash = new BtnSuperCash(this.game, 186 * 2, 0);

    this.menuBottom = this.add.graphics();
    this.menuBottom.beginFill(0x282c30);
    this.menuBottom.drawRect(0, this.world.height - 81, this.world.width, 81);
    this.menuBottom.endFill();
  }

  _addAllRelatedStuff2Bg = () => {
    this.bgGroup.addChild(this.warehouseGround);
    this.bgGroup.addChild(this.warehouseTable);
    this.bgGroup.addChild(this.marketGround);
    this.bgGroup.addChild(this.marketTruck);
    this.bgGroup.addChild(this.wall);
    this.bgGroup.addChild(this.exitGround);
    this.bgGroup.addChild(this.warehouseManager);
    this.bgGroup.addChild(this.marketManager);
    this.bgGroup.addChild(this.workStation1);
    this.bgGroup.addChild(this.workStation2);
    this.bgGroup.addChild(this.workStation3);
    this.bgGroup.addChild(this.workStation4);
    this.bgGroup.addChild(this.workStation5);
  }

  _createWalln2markets = () => {
    this.warehouseGround = this.add.graphics();
    this.warehouseGround.beginFill(0x78fc82);
    this.warehouseGround.drawRect(0, 0, this.world.width / 2, 674);
    this.warehouseGround.endFill();

    this.warehouseTable = this.add.sprite(100, 650, 'warehouse_table');
    this.warehouseTable.anchor.setTo(0, 1);

    // bg of selling
    this.marketGround = this.add.graphics();
    this.marketGround.beginFill(0xfc7b2d);
    this.marketGround.drawRect(this.world.centerX, 0, this.world.width / 2, 674);
    this.marketGround.endFill();

    this.marketTruck = this.add.sprite(this.world.width - 30, 700, 'market_truck');
    this.marketTruck.anchor.setTo(1);

    // wall behind the above two
    this.wall = this.add.sprite(this.world.centerX, 81, 'wall');
    this.wall.anchor.setTo(0.5, 0);
    // this.wall.visible = false;
  }

}

export default Game;
