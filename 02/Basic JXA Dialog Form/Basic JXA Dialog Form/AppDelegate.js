//
//  AppDelegate.js
//  Basic JXA Dialog Form
//
//  Created by uchcode.
//  Copyright © 2016 uchcode. All rights reserved.
//

ObjC.import('Cocoa')

ObjC.registerSubclass({
    
    name      : 'AppDelegate',
    superclass: 'NSObject',
    protocols : ['NSApplicationDelegate'],
    
    properties: {
        
        // IBOutlets
        
        'theWindow' : 'id',
        
    },
    
    methods: {
        
        // IBActions
        
        'ok:': {
            types: ['void', ['id']],
            
            implementation: function(sender) {
                //App.quit()
                App.displayAlert('OK')
            },
        },
        
        'cancel:': {
            types: ['void', ['id']],
            
            implementation: function(sender) {
                App.quit()
            },
        },
        
        // Delegate methods
        
        'applicationWillFinishLaunching:': function(notification) {
            this.theWindow.center
            this.theWindow.level = $.NSFloatingWindowLevel
            App.activate()
        },
        
        'applicationDidFinishLaunching:': function(notification) {
            // Insert code here to initialize your application
        },
        
        'applicationWillTerminate:': function(notification) {
            // Insert code here to tear down your application
        },
        
        'applicationShouldTerminate:': function(sender) {
            return $.NSTerminateNow
        },
        
    },
})
