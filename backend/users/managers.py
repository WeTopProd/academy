from django.contrib.auth.base_user import BaseUserManager


class UserManager(BaseUserManager):
    use_in_migrations = True

    def _create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError('Поле Email должно быть задано')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        date_of_birth = extra_fields.get('date_of_birth')
        user = self._create_user(email, password, **extra_fields)
        user.date_of_birth = date_of_birth
        user.save(using=self._db)
        return user

    def create_superuser(self, email, first_name=None, last_name=None,
                         phone=None, password=None, date_of_birth=None,
                         **kwargs):
        user = self.create_user(
            email,
            first_name=first_name,
            last_name=last_name,
            phone=phone,
            password=password,
            date_of_birth=date_of_birth,
            is_staff=True,
            is_active=True,
            is_superuser=True,
            **kwargs
        )
        return user
