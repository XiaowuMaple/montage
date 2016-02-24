/**
 * @module montage/core/meta/user-interface-descriptor
 * @requires montage/core/core
 */

var Montage = require("../core").Montage;

/*

List of PropertyInterfaceDescriptors, to show in UI, if not there, it's not viewable
PropertyInspector:
ViewInspector
EditInspector

Javier: per object, a limited amount of metadata:
1 inspector, 1 creator, 1 inlineInspector,


Javier want to be able to define which columns should be used in a table, the ratio of sizes between columns, the sorted by defaults, the filter criteria, etc…

if a user resize a column, where does it get saved?
The table would ask the object what does it has for a table.

Needs groups of properties, like in blueprint

When serializing their states, a table view that is data driven, the user tweaks needs to be  stored by component unique id and by the type they displayed at the time of change
*/

/**
 * @class UserInterfaceDescriptor
 * @extends Montage
 */
var UserInterfaceDescriptor = exports.UserInterfaceDescriptor = Montage.specialize( /** @lends UserInterfaceDescriptor.prototype # */ {
    /**
     * The object a UserInterfaceDescriptor describes. This would be an ObjectDescriptor/blueprint ot a PropertyDescriptor/PropertyBlueprint
     *
     * @type {object} descriptor
     */
    descriptor: {
        value: void 0
    },

    /**
     * An expression that enables a UserInterfaceDescriptor to get a display name from its describedObject.
     * Like "fullName" or firstName + " "+ lastName
     * @type {MontageExpression} nameExpression
     */
    nameExpression: {
        value: void 0
    },

    /**
     * An expression that enables a UserInterface to get a display name from its describedObject.
     *
     * @type {Component} iconComponent
     */
    iconComponent: {
        value: void 0
    },


    /**
     * A component to be used to create new objects like describedObject
     *
     * @type {Component} creatorComponent
     */
    creatorComponent: {
        value: void 0
    },

    /**
     * A component to be used to inspect describedObject
     *
     * @type {Component} inspectorComponent
     */
    inspectorComponent: {
        value: void 0
    },

    /**
     * A component to be used to inspect describedObject inline, over/around the object itself.
     * compared to in a separate area, which is handled by inspectorComponent.
     * This is especially relevant for authoring tools.
     *
     * @type {Component} editorComponent
     */
    editorComponent: {
        value: void 0
    },

    /**
     * A component to be used to inspect a collection of describedObject
     *
     * @type {Component} collectionInspectorComponent
     */
    collectionInspectorComponent: {
        value: void 0
    },

    /**
     * A component to be used to represent a single describedObject in a collection of describedObject
     *
     * @type {Component} collectionItemComponent
     */
    collectionItemComponent: {
        value: void 0
    },

    /**
     * An array of UserInterfaceDescriptors that describe the PropertyDescriptors/PropertyBlueprints of this object's describedObject/modelDescriptor
     *
     * @type {Component} propertyUserInterfaceDescriptors
     */
    propertyUserInterfaceDescriptors: {
        value: void 0
    }


});
