TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "id": "panorama_C9BCD614_C061_EA1D_41A4_C526E87E5006",
  "hfovMin": 60,
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_C9BCD614_C061_EA1D_41A4_C526E87E5006_t.jpg",
  "pitch": 0,
  "partial": false,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_C9BCD614_C061_EA1D_41A4_C526E87E5006_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 3040,
       "width": 6080,
       "url": "media/panorama_C9BCD614_C061_EA1D_41A4_C526E87E5006_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_C9BCD614_C061_EA1D_41A4_C526E87E5006.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "levels": [
          {
           "height": 96,
           "width": 96,
           "url": "media/panorama_C9BCD614_C061_EA1D_41A4_C526E87E5006_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -172.19,
        "hfov": 11.4,
        "pitch": 3.71
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_CCCC433B_C060_6A0A_41E5_03897F8A1A04",
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 1); this.MainViewerPanoramaPlayer.play()",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -172.19,
        "hfov": 11.4,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 193,
           "width": 193,
           "url": "media/panorama_C9BCD614_C061_EA1D_41A4_C526E87E5006_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 3.71
       }
      ]
     }
    ]
   }
  ],
  "cardboardMenu": {
   "rollOverFontColor": "#FFFFFF",
   "fontFamily": "Arial",
   "opacity": 0.4,
   "rollOverOpacity": 0.8,
   "id": "Menu_CDA43BB4_C094_9FF3_41D4_A5D994FF9274",
   "label": "Media",
   "backgroundColor": "#404040",
   "rollOverBackgroundColor": "#000000",
   "selectedFontColor": "#FFFFFF",
   "selectedBackgroundColor": "#202020",
   "children": [
    {
     "label": "IMG_20200512_143926_00_merged",
     "click": "this.mainPlayList.set('selectedIndex', 0)",
     "class": "MenuItem"
    },
    {
     "label": "360 Video Sample",
     "click": "this.mainPlayList.set('selectedIndex', 1)",
     "class": "MenuItem"
    }
   ],
   "fontColor": "#FFFFFF",
   "class": "Menu"
  },
  "hfovMax": 120,
  "label": "IMG_20200512_143926_00_merged",
  "vfov": 180
 },
 {
  "viewerArea": "this.MainViewer",
  "displayPlaybackBar": true,
  "mouseControlMode": "drag_rotation",
  "class": "PanoramaPlayer",
  "id": "MainViewerPanoramaPlayer",
  "preloadEnabled": false,
  "gyroscopeVerticalDraggingEnabled": true,
  "touchControlMode": "drag_rotation"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -178.18,
   "pitch": -0.49
  },
  "automaticZoomSpeed": 10,
  "manualRotationSpeed": 1327,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_C9BCD614_C061_EA1D_41A4_C526E87E5006_camera"
 },
 {
  "video": [
   {
    "posterURL": "media/media_CCD2A194_C060_261D_41C5_B83F78A6B0BC_poster.jpg",
    "height": 1920,
    "class": "Video360Resource",
    "framerate": 29.97,
    "type": "application/x-mpegurl",
    "width": 3840,
    "url": "media/media_CCD2A194_C060_261D_41C5_B83F78A6B0BC.m3u8"
   },
   {
    "posterURL": "media/media_CCD2A194_C060_261D_41C5_B83F78A6B0BC_poster.jpg",
    "height": 1920,
    "bitrate": 15088,
    "class": "Video360Resource",
    "framerate": 29.97,
    "type": "video/mp4",
    "width": 3840,
    "url": "media/media_CCD2A194_C060_261D_41C5_B83F78A6B0BC.mp4"
   }
  ],
  "hfovMin": 99,
  "hfov": 360,
  "class": "Video360",
  "loop": false,
  "id": "media_CCD2A194_C060_261D_41C5_B83F78A6B0BC",
  "thumbnailUrl": "media/media_CCD2A194_C060_261D_41C5_B83F78A6B0BC_t.jpg",
  "pitch": 0,
  "partial": false,
  "overlays": [
   {
    "useHandCursor": true,
    "enabledInCardboard": true,
    "maps": [
     {
      "class": "HotspotPanoramaOverlayMap",
      "image": {
       "levels": [
        {
         "height": 88,
         "width": 64,
         "url": "media/media_CCD2A194_C060_261D_41C5_B83F78A6B0BC_HS_0_0_0_map.gif",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "yaw": 0,
      "playbackPositions": [
       {
        "yaw": -71.68,
        "hfov": 7.49,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 0,
        "opacity": 0,
        "pitch": 18.41
       },
       {
        "yaw": -71.68,
        "hfov": 7.49,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 8.01,
        "opacity": 0,
        "pitch": 18.41
       },
       {
        "yaw": -71.68,
        "hfov": 7.49,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 8.01,
        "opacity": 1,
        "pitch": 18.41
       },
       {
        "yaw": -71.18,
        "hfov": 7.82,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 49.05,
        "opacity": 1,
        "pitch": 8.33
       }
      ],
      "pitch": 0
     }
    ],
    "class": "HotspotPanoramaOverlay",
    "id": "overlay_CE7CF1EE_C060_260D_41E6_4E1440804677",
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotPanoramaOverlayArea"
     }
    ],
    "rollOverDisplay": false,
    "items": [
     {
      "yaw": 0,
      "class": "HotspotPanoramaOverlayImage",
      "image": {
       "levels": [
        {
         "height": 176,
         "width": 128,
         "url": "media/media_CCD2A194_C060_261D_41C5_B83F78A6B0BC_HS_0_0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "playbackPositions": [
       {
        "yaw": -71.68,
        "hfov": 7.49,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 0,
        "opacity": 0,
        "pitch": 18.41
       },
       {
        "yaw": -71.68,
        "hfov": 7.49,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 8.01,
        "opacity": 0,
        "pitch": 18.41
       },
       {
        "yaw": -71.68,
        "hfov": 7.49,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 8.01,
        "opacity": 1,
        "pitch": 18.41
       },
       {
        "yaw": -71.18,
        "hfov": 7.82,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 49.05,
        "opacity": 1,
        "pitch": 8.33
       }
      ],
      "pitch": 0
     }
    ]
   },
   {
    "useHandCursor": true,
    "enabledInCardboard": true,
    "maps": [
     {
      "class": "HotspotPanoramaOverlayMap",
      "image": {
       "levels": [
        {
         "height": 52,
         "width": 61,
         "url": "media/media_CCD2A194_C060_261D_41C5_B83F78A6B0BC_HS_1_0_0_map.gif",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "yaw": 0,
      "playbackPositions": [
       {
        "yaw": -71.79,
        "hfov": 8.55,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 0,
        "opacity": 0,
        "pitch": 10.21
       },
       {
        "yaw": -71.79,
        "hfov": 8.55,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 8.01,
        "opacity": 0,
        "pitch": 10.21
       },
       {
        "yaw": -71.79,
        "hfov": 8.55,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 8.01,
        "opacity": 1,
        "pitch": 10.21
       },
       {
        "yaw": -71.29,
        "hfov": 8.68,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 49.05,
        "opacity": 1,
        "pitch": -0.13
       }
      ],
      "pitch": 0
     }
    ],
    "class": "HotspotPanoramaOverlay",
    "id": "overlay_CEFC064C_C060_6A0D_41D7_4CFDA45C4DC7",
    "areas": [
     {
      "click": "this.showPopupPanoramaOverlay(this.popup_CF7D6B20_C060_DA36_41E5_CE97DC91F45D, {'paddingLeft':5,'iconColor':'#000000','rollOverIconHeight':20,'iconLineWidth':5,'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','borderColor':'#000000','rollOverIconWidth':20,'rollOverBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'paddingRight':5,'paddingTop':5,'pressedIconColor':'#888888','iconWidth':20,'backgroundColorDirection':'vertical','rollOverIconColor':'#666666','pressedBorderSize':0,'rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','borderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','pressedIconLineWidth':5,'pressedIconHeight':20,'rollOverBackgroundOpacity':0.3}, null, null, null, null, null, false)",
      "mapColor": "#FF0000",
      "class": "HotspotPanoramaOverlayArea"
     }
    ],
    "rollOverDisplay": false,
    "items": [
     {
      "yaw": 0,
      "class": "HotspotPanoramaOverlayImage",
      "image": {
       "levels": [
        {
         "height": 104,
         "width": 123,
         "url": "media/media_CCD2A194_C060_261D_41C5_B83F78A6B0BC_HS_1_0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "playbackPositions": [
       {
        "yaw": -71.79,
        "hfov": 8.55,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 0,
        "opacity": 0,
        "pitch": 10.21
       },
       {
        "yaw": -71.79,
        "hfov": 8.55,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 8.01,
        "opacity": 0,
        "pitch": 10.21
       },
       {
        "yaw": -71.79,
        "hfov": 8.55,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 8.01,
        "opacity": 1,
        "pitch": 10.21
       },
       {
        "yaw": -71.29,
        "hfov": 8.68,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 49.05,
        "opacity": 1,
        "pitch": -0.13
       }
      ],
      "pitch": 0
     }
    ]
   },
   {
    "rotationX": 0,
    "hideDuration": 500,
    "rotationZ": 0,
    "showEasing": "cubic_in",
    "yaw": 0,
    "id": "popup_CF7D6B20_C060_DA36_41E5_CE97DC91F45D",
    "popupMaxWidth": "95%",
    "popupMaxHeight": "95%",
    "hfov": 10,
    "class": "PopupPanoramaOverlay",
    "hideEasing": "cubic_out",
    "image": {
     "levels": [
      {
       "height": 333,
       "width": 500,
       "url": "media/popup_CF7D6B20_C060_DA36_41E5_CE97DC91F45D_0_0.jpg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "showDuration": 500,
    "rotationY": 0,
    "playbackPositions": [
     {
      "class": "PopupPanoramaOverlayPlaybackPosition",
      "yaw": -71.79,
      "timestamp": 0,
      "hfov": 8.55,
      "pitch": 10.21
     },
     {
      "class": "PopupPanoramaOverlayPlaybackPosition",
      "yaw": -71.79,
      "timestamp": 8.01,
      "hfov": 8.55,
      "pitch": 10.21
     },
     {
      "class": "PopupPanoramaOverlayPlaybackPosition",
      "yaw": -71.79,
      "timestamp": 8.01,
      "hfov": 8.55,
      "pitch": 10.21
     },
     {
      "class": "PopupPanoramaOverlayPlaybackPosition",
      "yaw": -71.29,
      "timestamp": 49.05,
      "hfov": 8.68,
      "pitch": -0.13
     }
    ],
    "pitch": 0
   },
   {
    "useHandCursor": true,
    "enabledInCardboard": true,
    "maps": [
     {
      "class": "HotspotPanoramaOverlayMap",
      "image": {
       "levels": [
        {
         "height": 88,
         "width": 46,
         "url": "media/media_CCD2A194_C060_261D_41C5_B83F78A6B0BC_HS_2_0_0_map.gif",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "yaw": 0,
      "playbackPositions": [
       {
        "yaw": -33.88,
        "hfov": 7.04,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 0,
        "opacity": 0,
        "pitch": 26.68
       },
       {
        "yaw": -33.88,
        "hfov": 7.04,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 8.01,
        "opacity": 0,
        "pitch": 26.68
       },
       {
        "yaw": -33.88,
        "hfov": 7.04,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 8.01,
        "opacity": 1,
        "pitch": 26.68
       },
       {
        "yaw": -36.15,
        "hfov": 7.84,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 49.05,
        "opacity": 1,
        "pitch": 5.75
       }
      ],
      "pitch": 0
     }
    ],
    "class": "HotspotPanoramaOverlay",
    "id": "overlay_CF2B0233_C060_6A1B_41E6_B54E4272372E",
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotPanoramaOverlayArea"
     }
    ],
    "rollOverDisplay": false,
    "items": [
     {
      "yaw": 0,
      "class": "HotspotPanoramaOverlayImage",
      "image": {
       "levels": [
        {
         "height": 176,
         "width": 92,
         "url": "media/media_CCD2A194_C060_261D_41C5_B83F78A6B0BC_HS_2_0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "playbackPositions": [
       {
        "yaw": -33.88,
        "hfov": 7.04,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 0,
        "opacity": 0,
        "pitch": 26.68
       },
       {
        "yaw": -33.88,
        "hfov": 7.04,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 8.01,
        "opacity": 0,
        "pitch": 26.68
       },
       {
        "yaw": -33.88,
        "hfov": 7.04,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 8.01,
        "opacity": 1,
        "pitch": 26.68
       },
       {
        "yaw": -36.15,
        "hfov": 7.84,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 49.05,
        "opacity": 1,
        "pitch": 5.75
       }
      ],
      "pitch": 0
     }
    ]
   },
   {
    "useHandCursor": true,
    "enabledInCardboard": true,
    "maps": [
     {
      "class": "HotspotPanoramaOverlayMap",
      "image": {
       "levels": [
        {
         "height": 52,
         "width": 61,
         "url": "media/media_CCD2A194_C060_261D_41C5_B83F78A6B0BC_HS_3_0_0_map.gif",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "yaw": 0,
      "playbackPositions": [
       {
        "yaw": -34.26,
        "hfov": 8.18,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 0,
        "opacity": 0,
        "pitch": 18.53
       },
       {
        "yaw": -34.26,
        "hfov": 8.18,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 8.01,
        "opacity": 0,
        "pitch": 18.53
       },
       {
        "yaw": -34.26,
        "hfov": 8.18,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 8.01,
        "opacity": 1,
        "pitch": 18.53
       },
       {
        "yaw": -36.53,
        "hfov": 8.62,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 49.05,
        "opacity": 1,
        "pitch": -2.4
       }
      ],
      "pitch": 0
     }
    ],
    "class": "HotspotPanoramaOverlay",
    "id": "overlay_D01C8DF6_C06F_DE1D_41D1_1FD577323619",
    "areas": [
     {
      "click": "this.showPopupPanoramaOverlay(this.popup_CFEB4BEA_C060_5A35_41E6_D908FE066DA3, {'paddingLeft':5,'iconColor':'#000000','rollOverIconHeight':20,'iconLineWidth':5,'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','borderColor':'#000000','rollOverIconWidth':20,'rollOverBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'paddingRight':5,'paddingTop':5,'pressedIconColor':'#888888','iconWidth':20,'backgroundColorDirection':'vertical','rollOverIconColor':'#666666','pressedBorderSize':0,'rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','borderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','pressedIconLineWidth':5,'pressedIconHeight':20,'rollOverBackgroundOpacity':0.3}, null, null, null, null, null, false)",
      "mapColor": "#FF0000",
      "class": "HotspotPanoramaOverlayArea"
     }
    ],
    "rollOverDisplay": false,
    "items": [
     {
      "yaw": 0,
      "class": "HotspotPanoramaOverlayImage",
      "image": {
       "levels": [
        {
         "height": 104,
         "width": 123,
         "url": "media/media_CCD2A194_C060_261D_41C5_B83F78A6B0BC_HS_3_0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "playbackPositions": [
       {
        "yaw": -34.26,
        "hfov": 8.18,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 0,
        "opacity": 0,
        "pitch": 18.53
       },
       {
        "yaw": -34.26,
        "hfov": 8.18,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 8.01,
        "opacity": 0,
        "pitch": 18.53
       },
       {
        "yaw": -34.26,
        "hfov": 8.18,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 8.01,
        "opacity": 1,
        "pitch": 18.53
       },
       {
        "yaw": -36.53,
        "hfov": 8.62,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 49.05,
        "opacity": 1,
        "pitch": -2.4
       }
      ],
      "pitch": 0
     }
    ]
   },
   {
    "rotationX": 0,
    "hideDuration": 500,
    "rotationZ": 0,
    "showEasing": "cubic_in",
    "yaw": 0,
    "id": "popup_CFEB4BEA_C060_5A35_41E6_D908FE066DA3",
    "popupMaxWidth": "95%",
    "popupMaxHeight": "95%",
    "hfov": 10,
    "class": "PopupPanoramaOverlay",
    "hideEasing": "cubic_out",
    "image": {
     "levels": [
      {
       "height": 522,
       "width": 943,
       "url": "media/popup_CFEB4BEA_C060_5A35_41E6_D908FE066DA3_0_0.jpg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 283,
       "width": 512,
       "url": "media/popup_CFEB4BEA_C060_5A35_41E6_D908FE066DA3_0_1.jpg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "showDuration": 500,
    "rotationY": 0,
    "playbackPositions": [
     {
      "class": "PopupPanoramaOverlayPlaybackPosition",
      "yaw": -34.26,
      "timestamp": 0,
      "hfov": 8.18,
      "pitch": 18.53
     },
     {
      "class": "PopupPanoramaOverlayPlaybackPosition",
      "yaw": -34.26,
      "timestamp": 8.01,
      "hfov": 8.18,
      "pitch": 18.53
     },
     {
      "class": "PopupPanoramaOverlayPlaybackPosition",
      "yaw": -34.26,
      "timestamp": 8.01,
      "hfov": 8.18,
      "pitch": 18.53
     },
     {
      "class": "PopupPanoramaOverlayPlaybackPosition",
      "yaw": -36.53,
      "timestamp": 49.05,
      "hfov": 8.62,
      "pitch": -2.4
     }
    ],
    "pitch": 0
   },
   {
    "useHandCursor": true,
    "enabledInCardboard": true,
    "maps": [
     {
      "class": "HotspotPanoramaOverlayMap",
      "image": {
       "levels": [
        {
         "height": 88,
         "width": 57,
         "url": "media/media_CCD2A194_C060_261D_41C5_B83F78A6B0BC_HS_4_0_0_map.gif",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "yaw": 0,
      "playbackPositions": [
       {
        "yaw": 169.32,
        "hfov": 7.47,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 0,
        "opacity": 0,
        "pitch": 18.56
       },
       {
        "yaw": 169.32,
        "hfov": 7.47,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 8.01,
        "opacity": 0,
        "pitch": 18.56
       },
       {
        "yaw": 169.32,
        "hfov": 7.47,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 8.01,
        "opacity": 1,
        "pitch": 18.56
       },
       {
        "yaw": 169.06,
        "hfov": 7.65,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 49.05,
        "opacity": 1,
        "pitch": 13.77
       }
      ],
      "pitch": 0
     }
    ],
    "class": "HotspotPanoramaOverlay",
    "id": "overlay_CF50267B_C060_EA0B_41D0_7BA86F31AD31",
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotPanoramaOverlayArea"
     }
    ],
    "rollOverDisplay": false,
    "items": [
     {
      "yaw": 0,
      "class": "HotspotPanoramaOverlayImage",
      "image": {
       "levels": [
        {
         "height": 176,
         "width": 115,
         "url": "media/media_CCD2A194_C060_261D_41C5_B83F78A6B0BC_HS_4_0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "playbackPositions": [
       {
        "yaw": 169.32,
        "hfov": 7.47,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 0,
        "opacity": 0,
        "pitch": 18.56
       },
       {
        "yaw": 169.32,
        "hfov": 7.47,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 8.01,
        "opacity": 0,
        "pitch": 18.56
       },
       {
        "yaw": 169.32,
        "hfov": 7.47,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 8.01,
        "opacity": 1,
        "pitch": 18.56
       },
       {
        "yaw": 169.06,
        "hfov": 7.65,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 49.05,
        "opacity": 1,
        "pitch": 13.77
       }
      ],
      "pitch": 0
     }
    ]
   },
   {
    "useHandCursor": true,
    "enabledInCardboard": true,
    "maps": [
     {
      "class": "HotspotPanoramaOverlayMap",
      "image": {
       "levels": [
        {
         "height": 59,
         "width": 59,
         "url": "media/media_CCD2A194_C060_261D_41C5_B83F78A6B0BC_HS_5_0_0_map.gif",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "yaw": 0,
      "playbackPositions": [
       {
        "yaw": 169.3,
        "hfov": 8.24,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 0,
        "opacity": 0,
        "pitch": 9.61
       },
       {
        "yaw": 169.3,
        "hfov": 8.24,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 8.01,
        "opacity": 0,
        "pitch": 9.61
       },
       {
        "yaw": 169.3,
        "hfov": 8.24,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 8.01,
        "opacity": 1,
        "pitch": 9.61
       },
       {
        "yaw": 169.3,
        "hfov": 8.33,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 49.05,
        "opacity": 1,
        "pitch": 4.07
       }
      ],
      "pitch": 0
     }
    ],
    "class": "HotspotPanoramaOverlay",
    "id": "overlay_D19A7185_C060_26FE_41E7_6D36241383D7",
    "areas": [
     {
      "click": "this.showPopupPanoramaOverlay(this.popup_D0A22C5F_C060_5E0B_41E5_90BD824750E9, {'paddingLeft':5,'iconColor':'#000000','rollOverIconHeight':20,'iconLineWidth':5,'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','borderColor':'#000000','rollOverIconWidth':20,'rollOverBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'paddingRight':5,'paddingTop':5,'pressedIconColor':'#888888','iconWidth':20,'backgroundColorDirection':'vertical','rollOverIconColor':'#666666','pressedBorderSize':0,'rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','borderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','pressedIconLineWidth':5,'pressedIconHeight':20,'rollOverBackgroundOpacity':0.3}, null, null, null, null, null, false)",
      "mapColor": "#FF0000",
      "class": "HotspotPanoramaOverlayArea"
     }
    ],
    "rollOverDisplay": false,
    "items": [
     {
      "yaw": 0,
      "class": "HotspotPanoramaOverlayImage",
      "image": {
       "levels": [
        {
         "height": 119,
         "width": 119,
         "url": "media/media_CCD2A194_C060_261D_41C5_B83F78A6B0BC_HS_5_0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "playbackPositions": [
       {
        "yaw": 169.3,
        "hfov": 8.24,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 0,
        "opacity": 0,
        "pitch": 9.61
       },
       {
        "yaw": 169.3,
        "hfov": 8.24,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 8.01,
        "opacity": 0,
        "pitch": 9.61
       },
       {
        "yaw": 169.3,
        "hfov": 8.24,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 8.01,
        "opacity": 1,
        "pitch": 9.61
       },
       {
        "yaw": 169.3,
        "hfov": 8.33,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 49.05,
        "opacity": 1,
        "pitch": 4.07
       }
      ],
      "pitch": 0
     }
    ]
   },
   {
    "rotationX": 0,
    "hideDuration": 500,
    "rotationZ": 0,
    "showEasing": "cubic_in",
    "yaw": 0,
    "id": "popup_D0A22C5F_C060_5E0B_41E5_90BD824750E9",
    "popupMaxWidth": "95%",
    "popupMaxHeight": "95%",
    "hfov": 10,
    "class": "PopupPanoramaOverlay",
    "hideEasing": "cubic_out",
    "image": {
     "levels": [
      {
       "height": 683,
       "width": 1024,
       "url": "media/popup_D0A22C5F_C060_5E0B_41E5_90BD824750E9_0_0.jpg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 341,
       "width": 512,
       "url": "media/popup_D0A22C5F_C060_5E0B_41E5_90BD824750E9_0_1.jpg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "showDuration": 500,
    "rotationY": 0,
    "playbackPositions": [
     {
      "class": "PopupPanoramaOverlayPlaybackPosition",
      "yaw": 169.3,
      "timestamp": 0,
      "hfov": 8.24,
      "pitch": 9.61
     },
     {
      "class": "PopupPanoramaOverlayPlaybackPosition",
      "yaw": 169.3,
      "timestamp": 8.01,
      "hfov": 8.24,
      "pitch": 9.61
     },
     {
      "class": "PopupPanoramaOverlayPlaybackPosition",
      "yaw": 169.3,
      "timestamp": 8.01,
      "hfov": 8.24,
      "pitch": 9.61
     },
     {
      "class": "PopupPanoramaOverlayPlaybackPosition",
      "yaw": 169.3,
      "timestamp": 49.05,
      "hfov": 8.33,
      "pitch": 4.07
     }
    ],
    "pitch": 0
   },
   {
    "useHandCursor": true,
    "enabledInCardboard": true,
    "maps": [
     {
      "class": "HotspotPanoramaOverlayMap",
      "image": {
       "levels": [
        {
         "height": 88,
         "width": 98,
         "url": "media/media_CCD2A194_C060_261D_41C5_B83F78A6B0BC_HS_6_0_0_map.gif",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "yaw": 0,
      "playbackPositions": [
       {
        "yaw": 62.96,
        "hfov": 13.14,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 0,
        "opacity": 0,
        "pitch": 12.87
       },
       {
        "yaw": 62.96,
        "hfov": 13.14,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 8.01,
        "opacity": 0,
        "pitch": 12.87
       },
       {
        "yaw": 62.96,
        "hfov": 13.14,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 8.01,
        "opacity": 1,
        "pitch": 12.87
       }
      ],
      "pitch": 0
     }
    ],
    "class": "HotspotPanoramaOverlay",
    "id": "overlay_CF01803F_C0A0_260B_41DB_50C62B94BFC4",
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotPanoramaOverlayArea"
     }
    ],
    "rollOverDisplay": false,
    "items": [
     {
      "yaw": 0,
      "class": "HotspotPanoramaOverlayImage",
      "image": {
       "levels": [
        {
         "height": 177,
         "width": 196,
         "url": "media/media_CCD2A194_C060_261D_41C5_B83F78A6B0BC_HS_6_0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "playbackPositions": [
       {
        "yaw": 62.96,
        "hfov": 13.14,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 0,
        "opacity": 0,
        "pitch": 12.87
       },
       {
        "yaw": 62.96,
        "hfov": 13.14,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 8.01,
        "opacity": 0,
        "pitch": 12.87
       },
       {
        "yaw": 62.96,
        "hfov": 13.14,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 8.01,
        "opacity": 1,
        "pitch": 12.87
       }
      ],
      "pitch": 0
     }
    ]
   },
   {
    "useHandCursor": true,
    "enabledInCardboard": true,
    "maps": [
     {
      "class": "HotspotPanoramaOverlayMap",
      "image": {
       "levels": [
        {
         "height": 52,
         "width": 61,
         "url": "media/media_CCD2A194_C060_261D_41C5_B83F78A6B0BC_HS_7_0_0_map.gif",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "yaw": 0,
      "playbackPositions": [
       {
        "yaw": 62.8,
        "hfov": 8.6,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 0,
        "opacity": 0,
        "pitch": 3.91
       },
       {
        "yaw": 62.8,
        "hfov": 8.6,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 8.01,
        "opacity": 0,
        "pitch": 3.91
       },
       {
        "yaw": 62.8,
        "hfov": 8.6,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 8.01,
        "opacity": 1,
        "pitch": 3.91
       }
      ],
      "pitch": 0
     }
    ],
    "class": "HotspotPanoramaOverlay",
    "id": "overlay_D14074C4_C0A0_6E7D_41DB_CAD83260076B",
    "areas": [
     {
      "click": "this.showPopupPanoramaOverlay(this.popup_CC34E801_C095_F895_41D8_EFCED81A93D5, {'paddingLeft':5,'iconColor':'#000000','rollOverIconHeight':20,'iconLineWidth':5,'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','borderColor':'#000000','rollOverIconWidth':20,'rollOverBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'paddingRight':5,'paddingTop':5,'pressedIconColor':'#888888','iconWidth':20,'backgroundColorDirection':'vertical','rollOverIconColor':'#666666','pressedBorderSize':0,'rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','borderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','pressedIconLineWidth':5,'pressedIconHeight':20,'rollOverBackgroundOpacity':0.3}, this.ImageResource_CDAF5BC3_C094_9F94_41C8_5BE8AB2E6412, null, null, null, null, false)",
      "mapColor": "#FF0000",
      "class": "HotspotPanoramaOverlayArea"
     }
    ],
    "rollOverDisplay": false,
    "items": [
     {
      "yaw": 0,
      "class": "HotspotPanoramaOverlayImage",
      "image": {
       "levels": [
        {
         "height": 104,
         "width": 123,
         "url": "media/media_CCD2A194_C060_261D_41C5_B83F78A6B0BC_HS_7_0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "playbackPositions": [
       {
        "yaw": 62.8,
        "hfov": 8.6,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 0,
        "opacity": 0,
        "pitch": 3.91
       },
       {
        "yaw": 62.8,
        "hfov": 8.6,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 8.01,
        "opacity": 0,
        "pitch": 3.91
       },
       {
        "yaw": 62.8,
        "hfov": 8.6,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0,
        "timestamp": 8.01,
        "opacity": 1,
        "pitch": 3.91
       }
      ],
      "pitch": 0
     }
    ]
   },
   {
    "rotationX": 0,
    "hideDuration": 500,
    "rotationZ": 0,
    "showEasing": "cubic_in",
    "yaw": 0,
    "id": "popup_CC34E801_C095_F895_41D8_EFCED81A93D5",
    "popupMaxWidth": "95%",
    "popupMaxHeight": "95%",
    "hfov": 10,
    "class": "PopupPanoramaOverlay",
    "hideEasing": "cubic_out",
    "image": {
     "levels": [
      {
       "height": 512,
       "width": 1024,
       "url": "media/popup_CC34E801_C095_F895_41D8_EFCED81A93D5_0_1.jpg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "showDuration": 500,
    "rotationY": 0,
    "playbackPositions": [
     {
      "class": "PopupPanoramaOverlayPlaybackPosition",
      "yaw": 62.8,
      "timestamp": 0,
      "hfov": 8.6,
      "pitch": 3.91
     },
     {
      "class": "PopupPanoramaOverlayPlaybackPosition",
      "yaw": 62.8,
      "timestamp": 8.01,
      "hfov": 8.6,
      "pitch": 3.91
     },
     {
      "class": "PopupPanoramaOverlayPlaybackPosition",
      "yaw": 62.8,
      "timestamp": 8.01,
      "hfov": 8.6,
      "pitch": 3.91
     }
    ],
    "pitch": 0
   }
  ],
  "cardboardMenu": "this.Menu_CDA43BB4_C094_9FF3_41D4_A5D994FF9274",
  "label": "360 Video Sample",
  "hfovMax": 133,
  "vfov": 180
 },
 {
  "initialPosition": {
   "class": "RotationalCameraPosition",
   "yaw": -29.88,
   "hfov": 121,
   "pitch": -6.31
  },
  "automaticZoomSpeed": 10,
  "manualRotationSpeed": 1439,
  "manualZoomSpeed": 1,
  "class": "RotationalCamera",
  "id": "media_CCD2A194_C060_261D_41C5_B83F78A6B0BC_camera",
  "automaticRotationSpeed": 10
 },
 {
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "camera": "this.panorama_C9BCD614_C061_EA1D_41A4_C526E87E5006_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_C9BCD614_C061_EA1D_41A4_C526E87E5006"
   },
   {
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 1, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 1, this.media_CCD2A194_C060_261D_41C5_B83F78A6B0BC)",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 0)",
    "camera": "this.media_CCD2A194_C060_261D_41C5_B83F78A6B0BC_camera",
    "class": "Video360PlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.media_CCD2A194_C060_261D_41C5_B83F78A6B0BC"
   }
  ],
  "id": "mainPlayList",
  "class": "PlayList"
 },
 {
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.playList_CF02B294_C067_EA1D_41E7_BF08C6BC95E5, 0, 1)",
    "camera": "this.panorama_C9BCD614_C061_EA1D_41A4_C526E87E5006_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_C9BCD614_C061_EA1D_41A4_C526E87E5006"
   },
   {
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_CF02B294_C067_EA1D_41E7_BF08C6BC95E5, 1, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_CF02B294_C067_EA1D_41E7_BF08C6BC95E5, 1, this.media_CCD2A194_C060_261D_41C5_B83F78A6B0BC)",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer); this.setEndToItemIndex(this.playList_CF02B294_C067_EA1D_41E7_BF08C6BC95E5, 1, 0)",
    "camera": "this.media_CCD2A194_C060_261D_41C5_B83F78A6B0BC_camera",
    "class": "Video360PlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.media_CCD2A194_C060_261D_41C5_B83F78A6B0BC"
   }
  ],
  "id": "playList_CF02B294_C067_EA1D_41E7_BF08C6BC95E5",
  "class": "PlayList"
 },
 "this.Menu_CDA43BB4_C094_9FF3_41D4_A5D994FF9274",
 "this.popup_CF7D6B20_C060_DA36_41E5_CE97DC91F45D",
 "this.popup_CFEB4BEA_C060_5A35_41E6_D908FE066DA3",
 "this.popup_D0A22C5F_C060_5E0B_41E5_90BD824750E9",
 "this.popup_CC34E801_C095_F895_41D8_EFCED81A93D5",
 {
  "class": "ImageResource",
  "id": "ImageResource_CDAF5BC3_C094_9F94_41C8_5BE8AB2E6412",
  "levels": [
   {
    "height": 640,
    "width": 1280,
    "url": "media/popup_CC34E801_C095_F895_41D8_EFCED81A93D5_0_0.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 512,
    "width": 1024,
    "url": "media/popup_CC34E801_C095_F895_41D8_EFCED81A93D5_0_1.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 256,
    "width": 512,
    "url": "media/popup_CC34E801_C095_F895_41D8_EFCED81A93D5_0_2.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 }
], "children": [
 {
  "transitionMode": "blending",
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipTextShadowBlurRadius": 3,
  "paddingRight": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarBorderRadius": 0,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipPaddingBottom": 4,
  "shadow": false,
  "paddingBottom": 0,
  "playbackBarHeadBorderRadius": 0,
  "toolTipOpacity": 1,
  "toolTipShadowHorizontalLength": 0,
  "progressLeft": 0,
  "toolTipTextShadowOpacity": 0,
  "width": "100%",
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarProgressOpacity": 1,
  "paddingTop": 0,
  "toolTipShadowSpread": 0,
  "toolTipShadowVerticalLength": 0,
  "height": "100%",
  "playbackBarBorderSize": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipPaddingRight": 6,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarBackgroundOpacity": 1,
  "playbackBarLeft": 0,
  "toolTipFontStyle": "normal",
  "paddingLeft": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadHeight": 15,
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarHeadBorderSize": 0,
  "progressRight": 0,
  "progressOpacity": 1,
  "progressBarBorderColor": "#000000",
  "toolTipFontColor": "#606060",
  "progressBarBackgroundColorDirection": "vertical",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipFontWeight": "normal",
  "toolTipFontFamily": "Arial",
  "id": "MainViewer",
  "playbackBarHeadOpacity": 1,
  "playbackBarHeadShadow": true,
  "toolTipBorderSize": 1,
  "progressBackgroundColorDirection": "vertical",
  "class": "ViewerArea",
  "toolTipPaddingTop": 4,
  "progressBackgroundOpacity": 1,
  "minHeight": 50,
  "playbackBarBottom": 5,
  "toolTipPaddingLeft": 6,
  "toolTipShadowOpacity": 1,
  "playbackBarOpacity": 1,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "borderRadius": 0,
  "progressBorderColor": "#000000",
  "progressBarOpacity": 1,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBottom": 0,
  "minWidth": 100,
  "progressHeight": 10,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarHeight": 10,
  "toolTipBorderRadius": 3,
  "toolTipFontSize": 12,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBorderSize": 0,
  "playbackBarHeadWidth": 6,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarProgressBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipTextShadowColor": "#000000",
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarRight": 0,
  "progressBorderRadius": 0,
  "progressBarBorderRadius": 0,
  "toolTipShadowBlurRadius": 3,
  "borderSize": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "progressBarBorderSize": 0,
  "playbackBarProgressBorderRadius": 0,
  "toolTipBorderColor": "#767676",
  "toolTipShadowColor": "#333333"
 },
 {
  "bottom": 0,
  "right": 0,
  "layout": "horizontal",
  "gap": 10,
  "scrollBarColor": "#000000",
  "paddingRight": 0,
  "scrollBarOpacity": 0.5,
  "class": "Container",
  "horizontalAlign": "center",
  "minHeight": 20,
  "shadow": false,
  "overflow": "visible",
  "borderRadius": 0,
  "backgroundOpacity": 0,
  "children": [
   {
    "itemThumbnailShadowSpread": 1,
    "itemThumbnailScaleMode": "fit_outside",
    "itemBackgroundOpacity": 0,
    "selectedItemLabelFontWeight": "bold",
    "itemThumbnailHeight": 75,
    "layout": "horizontal",
    "backgroundColor": [
     "#000000"
    ],
    "itemPaddingBottom": 3,
    "itemPaddingRight": 3,
    "scrollBarColor": "#FFFFFF",
    "itemLabelFontColor": "#FFFFFF",
    "paddingRight": 20,
    "scrollBarOpacity": 0.5,
    "class": "ThumbnailList",
    "backgroundColorDirection": "vertical",
    "itemBorderRadius": 0,
    "gap": 10,
    "minHeight": 0,
    "itemPaddingTop": 3,
    "itemThumbnailBorderRadius": 5,
    "horizontalAlign": "left",
    "shadow": false,
    "itemHorizontalAlign": "center",
    "itemBackgroundColorDirection": "vertical",
    "borderRadius": 5,
    "itemMode": "normal",
    "backgroundOpacity": 0.2,
    "itemPaddingLeft": 3,
    "minWidth": 0,
    "paddingBottom": 10,
    "itemThumbnailShadowOpacity": 0.8,
    "borderSize": 0,
    "itemLabelFontStyle": "normal",
    "itemBackgroundColorRatios": [],
    "itemLabelPosition": "bottom",
    "itemOpacity": 1,
    "itemThumbnailShadowBlurRadius": 4,
    "backgroundColorRatios": [
     0
    ],
    "itemLabelFontWeight": "normal",
    "scrollBarWidth": 10,
    "scrollBarVisible": "rollOver",
    "itemThumbnailOpacity": 1,
    "itemBackgroundColor": [],
    "paddingTop": 10,
    "verticalAlign": "top",
    "itemThumbnailShadow": true,
    "playList": "this.playList_CF02B294_C067_EA1D_41E7_BF08C6BC95E5",
    "itemVerticalAlign": "middle",
    "itemThumbnailShadowVerticalLength": 3,
    "itemThumbnailShadowColor": "#000000",
    "itemLabelFontSize": 14,
    "paddingLeft": 20,
    "itemLabelGap": 5,
    "itemLabelTextDecoration": "none",
    "scrollBarMargin": 2,
    "itemThumbnailWidth": 100,
    "itemLabelFontFamily": "Arial",
    "itemLabelHorizontalAlign": "center",
    "itemThumbnailShadowHorizontalLength": 3,
    "maxHeight": 600,
    "maxWidth": 800
   }
  ],
  "minWidth": 20,
  "paddingBottom": 0,
  "contentOpaque": false,
  "verticalAlign": "bottom",
  "scrollBarWidth": 10,
  "scrollBarVisible": "rollOver",
  "height": 200,
  "paddingTop": 0,
  "paddingLeft": 0,
  "left": 0,
  "borderSize": 0,
  "scrollBarMargin": 2
 },
 {
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 350,
   "class": "FadeInEffect"
  },
  "bottom": 0,
  "right": 0,
  "id": "veilPopupPanorama",
  "backgroundColor": [
   "#000000"
  ],
  "paddingRight": 0,
  "class": "UIComponent",
  "backgroundColorDirection": "vertical",
  "minHeight": 0,
  "visible": false,
  "shadow": false,
  "backgroundOpacity": 0.55,
  "borderRadius": 0,
  "backgroundColorRatios": [
   0
  ],
  "paddingBottom": 0,
  "minWidth": 0,
  "paddingTop": 0,
  "paddingLeft": 0,
  "left": 0,
  "borderSize": 0,
  "top": 0
 },
 {
  "bottom": 0,
  "right": 0,
  "id": "zoomImagePopupPanorama",
  "backgroundColor": [],
  "paddingRight": 0,
  "class": "ZoomImage",
  "backgroundColorDirection": "vertical",
  "minHeight": 0,
  "visible": false,
  "shadow": false,
  "backgroundOpacity": 1,
  "borderRadius": 0,
  "backgroundColorRatios": [],
  "paddingBottom": 0,
  "minWidth": 0,
  "paddingTop": 0,
  "scaleMode": "custom",
  "paddingLeft": 0,
  "left": 0,
  "borderSize": 0,
  "top": 0
 },
 {
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 350,
   "class": "FadeInEffect"
  },
  "right": 10,
  "id": "closeButtonPopupPanorama",
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "textDecoration": "none",
  "paddingRight": 5,
  "class": "CloseButton",
  "mode": "push",
  "backgroundColorDirection": "vertical",
  "shadowSpread": 1,
  "shadowBlurRadius": 6,
  "minHeight": 0,
  "visible": false,
  "iconWidth": 20,
  "horizontalAlign": "center",
  "fontColor": "#FFFFFF",
  "iconBeforeLabel": true,
  "shadow": false,
  "layout": "horizontal",
  "backgroundOpacity": 0.3,
  "borderRadius": 0,
  "fontFamily": "Arial",
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingBottom": 5,
  "fontWeight": "normal",
  "verticalAlign": "middle",
  "gap": 5,
  "borderColor": "#000000",
  "minWidth": 0,
  "cursor": "hand",
  "fontSize": 12,
  "iconLineWidth": 5,
  "paddingTop": 5,
  "fontStyle": "normal",
  "shadowColor": "#000000",
  "pressedIconColor": "#888888",
  "rollOverIconColor": "#666666",
  "paddingLeft": 5,
  "label": "",
  "iconHeight": 20,
  "borderSize": 0,
  "iconColor": "#000000",
  "top": 10
 }
], 
 "start": "this.set('mute', true); this.syncPlaylists([this.playList_CF02B294_C067_EA1D_41E7_BF08C6BC95E5,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0)",
 "id": "rootPlayer",
 "scripts": {
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "registerKey": function(key, value){  window[key] = value; },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "unregisterKey": function(key){  delete window[key]; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "getKey": function(key){  return window[key]; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "existsKey": function(key){  return key in window; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } }
 },
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "class": "Player",
 "gap": 10,
 "minHeight": 20,
 "shadow": false,
 "backgroundPreloadEnabled": true,
 "horizontalAlign": "left",
 "borderRadius": 0,
 "vrPolyfillScale": 0.5,
 "paddingBottom": 0,
 "contentOpaque": false,
 "verticalAlign": "top",
 "layout": "absolute",
 "overflow": "visible",
 "minWidth": 20,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "paddingTop": 0,
 "height": "100%",
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "mouseWheelEnabled": true
})