import serverConfig from '../server_config';

import atlasData from '../__static/images/atlas/material';
// console.log(atlas);

class Start extends window.Phaser.State {
  init(payload) {
    this.stage.backgroundColor = '#fff';
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;

    if (payload !== undefined) {
      this.payload = payload;
    }
  }

  preload() {
    // this.load.baseURL = serverConfig.BASE_URL;
    this.load.baseURL = '__static/';
    this.load.atlas('material', 'images/atlas/material.png', null, atlasData);

    this.load.image('arrow', 'images/icon_level_up.png');
    this.load.image('bell_base', 'images/bell_base.png');
    this.load.image('bell_body_red', 'images/bell_body_red.png');
    this.load.image('bell_body_yellow', 'images/bell_body_yellow.png');
    this.load.image('bell_handle_red', 'images/bell_handle_red.png');
    this.load.image('bell_handle_yellow', 'images/bell_handle_yellow.png');
    this.load.image('bell_hole', 'images/bell_hole.png');
    this.load.image('bell_timer', 'images/bell_timer.png');
    this.load.spritesheet('box_collect_holder', 'images/box_collect_holder.png', 75, 75);
    this.load.image('box_collect', 'images/box_collect.png');
    this.load.image('btn_blueprint', 'images/btn_blueprint.png');
    this.load.image('btn_buy_ws_cash_disable', 'images/btn_buy_ws_cash_disable.png');
    this.load.image('btn_buy_ws_cash', 'images/btn_buy_ws_cash.png');
    this.load.image('btn_buy_ws_super_cash', 'images/btn_buy_ws_super_cash.png');
    this.load.image('btn_cash', 'images/btn_cash.png');
    this.load.image('btn_idle_cash', 'images/btn_idle_cash.png');
    this.load.image('btn_level', 'images/btn_level.png');
    this.load.image('btn_product_holder', 'images/btn_product_holder.png');
    this.load.image('btn_shop', 'images/btn_shop.png');
    this.load.image('btn_super_cash', 'images/btn_super_cash.png');
    this.load.image('btn_wheel_coin', 'images/btn_wheel_coin.png');
    this.load.image('btn_x_cash', 'images/btn_x_cash.png');
    this.load.image('ground_level_1', 'images/ground_level_1.png');
    this.load.image('ground_level_2', 'images/ground_level_2.png');
    this.load.image('ground_level_3', 'images/ground_level_3.png');
    this.load.image('ground_level_4', 'images/ground_level_4.png');
    this.load.image('ground_level_5', 'images/ground_level_5.png');
    this.load.image('ground_level_6', 'images/ground_level_6.png');
    this.load.image('icon_level_up', 'images/icon_level_up.png');
    this.load.image('market_truck', 'images/market_truck.png');
    this.load.image('mgr_market', 'images/mgr_market.png');
    this.load.image('mgr_warehouse', 'images/mgr_warehouse.png');
    this.load.image('mgr_worker', 'images/mgr_worker.png');
    this.load.image('table_cover', 'images/table_cover.png');
    this.load.image('table_level_1', 'images/table_level_1.png');
    this.load.image('table_level_2', 'images/table_level_2.png');
    this.load.image('table_level_3', 'images/table_level_3.png');
    this.load.image('table_level_4', 'images/table_level_4.png');
    this.load.image('table_level_5', 'images/table_level_5.png');
    this.load.image('table_level_6', 'images/table_level_6.png');
    this.load.image('wall', 'images/wall.png');
    this.load.image('warehouse_table', 'images/warehouse_table.png');
    this.load.spritesheet('worker_market', 'images/worker_market.png', 84, 126);
    this.load.spritesheet('worker_warehouse', 'images/worker_warehouse.png', 84, 126);
    this.load.spritesheet('worker', 'images/worker.png', 96, 110);
    this.load.image('arrow_fast_scroll', 'images/arrow_fast_scroll.png');


    this.load.image('test_iconEgg', 'test/Egg_Base.png');
    // try
    this.load.image('ad_campaign', 'images/ad_campaign.png');
    this.load.image('arrow_levelUp', 'images/arrow_level_upgrade.png');
    this.load.image('avatar_tran_market', 'images/avatar_market_transporter.png');
    this.load.image('avatar_tran_warehose', 'images/avatar_transporter.png');
    this.load.image('avatar_worker', 'images/avatar_worker.png');
    this.load.image('bell_panel_heading', 'images/bell_panel_heading.png');
    this.load.image('bell_red_whole', 'images/bell_red_whole.png');
    this.load.image('bell_yellow_whole', 'images/bell_yellow_whole.png');
    this.load.image('btn_skill_upgrade_disable', 'images/btn_skill_upgrade_disable.png');
    this.load.image('btn_skill_upgrade_able', 'images/btn_skill_upgrade_able.png');
    this.load.image('btn_skill_buy_able', 'images/btn_skill_buy_able.png');
    this.load.image('btn_skill_buy_disable', 'images/btn_buy_skill_disable.png');
    this.load.image('btn_sale_upgrade_disable', 'images/btn_sale_upgrade_disable.png');
    this.load.image('btn_sale_upgrade_able', 'images/btn_sale_upgrade_able.png');
    this.load.image('bg_base', 'images/background_base.png');
    this.load.image('bg_bronze', 'images/background_copper.png');
    this.load.image('bg_gold', 'images/background_gold.png');
    this.load.image('bg_jade', 'images/background_jade.png');
    this.load.image('bg_ruby', 'images/background_ruby.png');
    this.load.image('bg_silver', 'images/background_silver.png');
    this.load.image('bg_bell', 'images/bell_bg.png');
    this.load.image('bg_skill', 'images/skill_bg.png');
    this.load.image('btn_close', 'images/btn_close.png');
    this.load.image('btn_cash_able2buy', 'images/btn_cash_able2buy.png');
    this.load.image('btn_cash_unable2buy', 'images/btn_cash_unable2buy.png');
    this.load.image('btn_watch_ad', 'images/btn_watch_ad.png');
    this.load.image('btn_watch_ad_disabled', 'images/btn_watch_ad_disabled.png');
    this.load.image('btn_level_upgrade', 'images/btn_level_upgrade.png');
    this.load.image('btn_level_upgrade_unable', 'images/btn_level_upgrade_unable.png');
    this.load.image('btn_pick_upgrade', 'images/btn_activated.png');
    this.load.image('btn_research_update', 'images/btn_research_update.png');
    this.load.image('btn_research_skip', 'images/btn_research_skip.png');
    this.load.image('btn_research_update_disable', 'images/btn_research_update_disable.png');
    this.load.image('btn_prod_cash', 'images/btn_prod_cash.png');
    this.load.image('btn_prod_coin', 'images/btn_prod_coin.png');
    this.load.image('btn_prod_coin_disable', 'images/btn_prod_coin_disable.png');
    this.load.image('btn_prodLocked', 'images/btn_prodLocked.png');
    this.load.image('btn_tick', 'images/btn_tick.png');
    this.load.image('btn_tick_activated', 'images/btn_tick_activated.png');
    this.load.image('btn_collect', 'images/btn_collect.png');
    this.load.image('btn_share2', 'images/btn_share2.png');
    this.load.image('bubble_percentage', 'images/bubble_percentage.png');
    this.load.image('clock_yellow', 'images/clock_yellow.png');
    this.load.image('progressBarSaleBoost', 'images/progressBarSaleBoost.png');
    this.load.image('panel_skill_counts', 'images/panel_skill_counts.png');
    this.load.image('panel_prod_price', 'images/panel_prod_price.png');
    this.load.image('icon_loading_speed', 'images/icon_loading_speed.png');
    this.load.image('icon_transporter', 'images/icon_transporter.png');
    this.load.image('icon_walk_speed', 'images/icon_walk_speed.png');
    this.load.image('icon_max_resource', 'images/icon_max_resource.png');
    this.load.image('icon_transporter_capacity', 'images/icon_transporter_capacity.png');
    this.load.image('icon_money_transported', 'images/icon_money_transported.png');
    this.load.image('icon_tick', 'images/icon_tick.png');
    this.load.image('icon_ore', 'images/icon_ore.png');
    this.load.image('icon_power', 'images/icon_power.png');
    this.load.image('icon_base', 'images/icon_base.png');
    this.load.image('icon_skill_factory2', 'images/icon_skill_factory2.png');
    this.load.image('icon_skill_factory1', 'images/icon_skill_factory1.png');
    this.load.image('idle_chunk', 'images/idle_bunk.png');
    this.load.image('skill_panel_heading', 'images/skill_panel_heading.png');
  }

  create() {
    if (this.payload) {
      this.state.start('Game', true, false, this.payload);
    }
    this.state.start('Game');
    // this.state.start('Test');
  }
}

export default Start;
