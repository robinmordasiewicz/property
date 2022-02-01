#!/usr/bin/env osascript

on run argv
	
	set theFile to URL-list.txt
	open theFile
	
end run

on open theFile
	
	--  Read the file
	try
		set fRef to (open for access theFile)
		set url_text to read theFile
		close access fRef
	on error errString
		set theAlertText to "An error has occurred."
		set theAlertMessage to "There was an error reading \"" & theFile & "\": " & errString
		display alert theAlertText message theAlertMessage as critical buttons {"OK"} default button "OK"
		return
	end try
	
	--  Create a list that SiteSucker can use
	set AppleScript's text item delimiters to "
"
	set url_list to every text item of url_text
	set AppleScript's text item delimiters to ""
	
	display dialog "Download with queuing or without queuing?" buttons ¬
		{"With Queuing", "Without Queuing", "Stop"} default button 3 with icon 1
	set the user_choice to the button returned of the result
	if the user_choice is "Stop" then
		return
	end if
	
	--  Tell SiteSucker to download the sites in the list
	tell application "SiteSucker"
		activate
		
		-- Create a new document
		set newDocument to make new document
		
		repeat with i from 1 to number of items in url_list
			set this_item to item i of url_list
			if (this_item starts with "http://") or (this_item starts with "https://") then
				if the user_choice is "With Queuing" then
					download this_item with queuing
				else
					download this_item without queuing
				end if
			else if length of this_item is greater than 0 then
				set theAlertText to "An error has occurred."
				set theAlertMessage to "The URL \"" & this_item & "\" does not begin with \"http://\" or \"https://\"."
				display alert theAlertText message theAlertMessage as critical buttons {"OK"} default button "OK"
				return
			end if
		end repeat
	end tell
	
end open

