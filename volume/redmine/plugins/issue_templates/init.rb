# encoding: utf-8
require 'redmine'

# require 'hooks/view_layouts_base_html_head_hook'
# require 'lib/hooks/view_layouts_base_html_head_hook'
# require_relative 'lib/hooks/view_layouts_base_html_head_hook'
# require 'issue_templates/hooks/view_layouts_base_html_head_hook'
require_relative 'lib/issue_templates/hooks/view_layouts_base_html_head_hook'


Redmine::Plugin.register :issue_templates do
  name 'Issue Templates Plugin'
  author 'Cem Topkaya'
  description 'This plugin adds template buttons for Redmine issues'
  version '0.0.1'
  url 'https://github.com/cemtopkaya/redmine-issue-template.git'
  author_url 'http://www.cemtopkaya.com'
  requires_redmine :version_or_higher => '4.0'
end