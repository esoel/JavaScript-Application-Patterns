//
//  AppDelegate.js
//  __projectname___
//
//  Created by uchcode.
//  Copyright © 2016 uchcode. All rights reserved.
//

ObjC.import('Cocoa')
ObjC.import('WebKit')

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
                App.activate()
                App.displayAlert('OK')
            },
        },
        
        'cancel:': {
            types: ['void', ['id']],
            
            implementation: function(sender) {
                App.activate()
                App.displayAlert('Cancel')
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
        
        'applicationWillTerminate:': function(sender) {
            // Insert code here to tear down your application
        },
        
        'applicationShouldTerminate:': function(sender) {
            return $.NSTerminateNow
        },
        
    },
})