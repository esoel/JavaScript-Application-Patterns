//
//  AppDelegate.js
//  Basic JXA with Xcode
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
        
        
        
        // Delegate methods
        
        'applicationWillFinishLaunching:': function(notification) {
            // Insert code here to initialize your application before any files are opened
        },
        
        'applicationDidFinishLaunching:': function(notification) {
            // Insert code here to initialize your application
        },
        
        'applicationWillTerminate:': function(sender) {
            // Insert code here to tear down your application
        },
        
        'applicationShouldTerminate:': function(sender) {
            // Insert code here to do any housekeeping before your application quits
            return $.NSTerminateNow
        },
        
    },
})
