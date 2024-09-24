module IssueTemplates
  module Hooks
    class ViewLayoutsBaseHtmlHeadHook < Redmine::Hook::ViewListener
      def view_layouts_base_html_head(context={})
        javascript_include_tag('issue_templates', :plugin => 'issue_templates')
        
        # return stylesheet_link_tag("jquery.fancybox-3.5.7.min.css", :plugin => "redmine_lightbox2", :media => "screen") +
        # stylesheet_link_tag("lightbox.css", :plugin => "redmine_lightbox2", :media => "screen") +
        # javascript_include_tag('jquery.fancybox-3.5.7.min.js', :plugin => 'redmine_lightbox2') +
        # javascript_include_tag('lightbox.js', :plugin => 'redmine_lightbox2')

      end
    end
  end
end