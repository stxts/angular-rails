10.times do |d|
FreelanceDocument.create!(
	title: "Document #{d}", 
	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	file_url: "www.google.com",
	image_url: "https://s3.amazonaws.com/stxts-profile/crawling_ninja_logo.png"
	)
end