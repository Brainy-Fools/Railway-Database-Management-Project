from django import forms

# the field should be exact name given in template name
class SignUpForm(forms.Form):
    emailSign = forms.EmailField(max_length=60, help_text='Put Genuine Email Here')
    passSign = forms.CharField(max_length=32, widget=forms.PasswordInput)
    conf_passSign= forms.CharField(max_length=32, widget=forms.PasswordInput)
    userStatusSign = forms.ChoiceField()
    checkSign = forms.CheckboxInput()
    pass