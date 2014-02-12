Feature: editor

$editor = 'http://localhost/editor2/#/features/e2e/delete-me.feature'
$hostname = 'css=[type="url"]'
$executeButton = 'id=execute'
$reportsPanel = 'class=center-panel element'

 Scenario: nothing to see here
 Given I am on the $editor page
   When I set the browser size to 1024x800

 Scenario: auto-save changes
 Given I am on the $editor page
   When I input random text into the editor cm
     Then the page should contain $input
   When I pause for 2 seconds
   When I refresh the page
   Then the page should contain $input

 Scenario: preserve choices
 Given I am on the $editor page
   When I input random text into the input field $hostname
   When I select IE 10 Local from the css=[ng-options] dropdown
   When I pause for 1 second
   When I refresh the page
     Then the css=[type='url']:contains('$input') element should be present
     Then IE 10 Local should be selected in the css=[ng-options] dropdown

 Scenario: execute a job
 Given I am on the $editor page
   When I wait for the $executeButton to be visible
   When I click on the link $executeButton
     Then the $reportsPanel element should be visible