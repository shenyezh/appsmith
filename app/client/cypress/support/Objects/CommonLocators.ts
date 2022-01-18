export class CommonLocators {

    _addEntityAPI = ".datasources .t--entity-add-btn"
    _integrationCreateNew = "[data-cy=t--tab-CREATE_NEW]"
    _loading = "#loading"
    _actionName = ".t--action-name-edit-field span"
    _actionTxt = ".t--action-name-edit-field input"
    _entityNameInExplorer = (entityNameinLeftSidebar: string) => "//div[contains(@class, 't--entity-name')][text()='" + entityNameinLeftSidebar + "']"
    _homeIcon = ".t--appsmith-logo"
    _homePageAppCreateBtn = ".t--applications-container .createnew"
    _saveStatusSuccess = ".t--save-status-success"
    _codeMirrorTextArea = ".CodeMirror textarea"
    _codeMirrorCode = ".CodeMirror-code"
    _codeEditorTargetTextArea = ".CodeEditorTarget textarea"
    _entityExplorersearch = "#entity-explorer-search"
    _propertyControl = ".t--property-control-"
    _textWidget = ".t--draggable-textwidget span"
    _inputWidget = ".t--draggable-inputwidget span"
    _publishButton = ".t--application-publish-btn"
    _textWidgetInDeployed = ".t--widget-textwidget span"
    _backToEditor = ".t--back-to-editor"
    _expandCollapseArrow = (entityNameinLeftSidebar: string) => "//div[text()='" + entityNameinLeftSidebar + "']/ancestor::div/preceding-sibling::a[contains(@class, 't--entity-collapse-toggle')]"
    _entityProperties = (entityNameinLeftSidebar: string) => "//div[text()='" + entityNameinLeftSidebar + "']/ancestor::div[contains(@class, 't--entity-item')]/following-sibling::div//div[contains(@class, 't--entity-property')]//code"
    _contextMenu = (entityNameinLeftSidebar: string) => "//div[text()='" + entityNameinLeftSidebar + "']/ancestor::div[contains(@class, 't--entity')]//span[contains(@class, 'entity-context-menu')]//div"
    _contextMenuItem = (item: string) => "//div[text()='" + item + "']/parent::a[contains(@class, 'single-select')]"
    _newPage = ".pages .t--entity-add-btn"
    _entityNameEditing = (entityNameinLeftSidebar: string) => "//span[text()='" + entityNameinLeftSidebar + "']/parent::div[contains(@class, 't--entity-name editing')]/input"
    _toastMsg = ".t--toast-action"
    _jsToggle = (controlToToggle: string) => ".t--property-control-" + controlToToggle + " .t--js-toggle"
    _buttonClick = (btnVisibleText: string) => "//span[text()='" + btnVisibleText + "']/parent::button"
    _empty = "span[name='no-response']"

}