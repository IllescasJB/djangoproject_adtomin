from django.contrib import admin
from AdTominApps.expenses.models import AdtExpenses

class AdtExpensesAdmin(admin.ModelAdmin):
	   list_display  = ['vExpenseId','vExpenseDescription','vExpenseBalance','User']
	   list_filter   = ['User']

# Register your models here.
admin.site.register(AdtExpenses,AdtExpensesAdmin)