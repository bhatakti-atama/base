// **********************************************************************
//
// Copyright (c) 2003-2014 ZeroC, Inc. All rights reserved.
//
// This copy of Ice is licensed to you under the terms described in the
// ICE_LICENSE file included in this distribution.
//
// **********************************************************************
//
// Ice version 3.5.1
//
// <auto-generated>
//
// Generated from file `cmdvel.ice'
//
// Warning: do not edit this file.
//
// </auto-generated>
//

(function(global, r)
{
    var require = typeof(r) === "function" ? r : function(){};
    require("Ice/Object");
    require("Ice/ObjectPrx");
    require("Ice/Operation");
    require("Ice/Long");
    require("Ice/HashMap");
    require("Ice/HashUtil");
    require("Ice/ArrayUtil");
    require("Ice/StreamHelpers");
    
    var Ice = global.Ice || {};
    var jderobot = global.jderobot ||  {};

    jderobot.CMDVelData = Slice.defineObject(
        function(linearX, linearY, linearZ, angularX, angularY, angularZ)
        {
            Ice.Object.call(this);
            this.linearX = linearX !== undefined ? linearX : 0.0;
            this.linearY = linearY !== undefined ? linearY : 0.0;
            this.linearZ = linearZ !== undefined ? linearZ : 0.0;
            this.angularX = angularX !== undefined ? angularX : 0.0;
            this.angularY = angularY !== undefined ? angularY : 0.0;
            this.angularZ = angularZ !== undefined ? angularZ : 0.0;
        },
        Ice.Object, undefined, 1,
        [
            "::Ice::Object",
            "::jderobot::CMDVelData"
        ],
        -1,
        function(__os)
        {
            __os.writeFloat(this.linearX);
            __os.writeFloat(this.linearY);
            __os.writeFloat(this.linearZ);
            __os.writeFloat(this.angularX);
            __os.writeFloat(this.angularY);
            __os.writeFloat(this.angularZ);
        },
        function(__is)
        {
            this.linearX = __is.readFloat();
            this.linearY = __is.readFloat();
            this.linearZ = __is.readFloat();
            this.angularX = __is.readFloat();
            this.angularY = __is.readFloat();
            this.angularZ = __is.readFloat();
        },
        false);

    jderobot.CMDVelDataPrx = Slice.defineProxy(Ice.ObjectPrx, jderobot.CMDVelData.ice_staticId, undefined);

    Slice.defineOperations(jderobot.CMDVelData, jderobot.CMDVelDataPrx);

    jderobot.CMDVel = Slice.defineObject(
        undefined,
        Ice.Object, undefined, 1,
        [
            "::Ice::Object",
            "::jderobot::CMDVel"
        ],
        -1, undefined, undefined, false);

    jderobot.CMDVelPrx = Slice.defineProxy(Ice.ObjectPrx, jderobot.CMDVel.ice_staticId, undefined);

    Slice.defineOperations(jderobot.CMDVel, jderobot.CMDVelPrx,
    {
        "setCMDVelData": [, , , , , [3], [["jderobot.CMDVelData", true]], , , true, ]
    });
    global.jderobot = jderobot;
}
(typeof (global) === "undefined" ? window : global, typeof (require) === "undefined" ? undefined : require));