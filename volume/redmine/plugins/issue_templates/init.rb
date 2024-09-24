# encoding: utf-8
require 'redmine'

# require 'hooks/view_layouts_base_html_head_hook'
# require 'lib/hooks/view_layouts_base_html_head_hook'
# require_relative 'lib/hooks/view_layouts_base_html_head_hook'
# require 'issue_templates/hooks/view_layouts_base_html_head_hook'
require_relative 'lib/issue_templates/hooks/view_layouts_base_html_head_hook'


Redmine::Plugin.register :issue_templates do
  name 'Issue Templates Plugin'
  author 'Your Name'
  description 'This plugin adds template buttons for Redmine issues'
  version '0.0.1'
  url 'http://example.com/path/to/plugin'
  author_url 'http://example.com/about'
  requires_redmine :version_or_higher => '4.0'
end