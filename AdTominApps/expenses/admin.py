from django.contrib import admin
from AdTominApps.expenses.models import AdtExpenses, AdtExpensesDate

class AdtExpensesAdmin(admin.ModelAdmin):
	   list_display  = ['vExpenseId','vExpenseDescription','vExpenseBalance','User']
	   list_filter   = ['User']

class AdtExpensesDateAdmin(admin.ModelAdmin):
	   list_display  = ['vExpenseId','vExpenseDescription','vExpenseBalance','vDate','User']
	   list_filter   = ['User']

# Register your models here.
admin.site.register(AdtExpenses,AdtExpensesAdmin)
admin.site.register(AdtExpensesDate,AdtExpensesDateAdmin)