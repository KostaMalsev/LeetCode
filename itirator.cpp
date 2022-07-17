#include <iostream>
#include <vector>
#include <array>
#include <memory>
#include <algorithm>

struct poly_const_iterator
{
    using value_type = int;

    struct concept {
        virtual void next(int n) = 0;
        virtual const value_type& deref() const = 0;
        virtual bool equal(const void* other) const = 0;
        virtual std::unique_ptr<concept> clone() const = 0;
        virtual const std::type_info& type() const = 0;
        virtual const void* address() const = 0;
        virtual ~concept() = default;
    };

    template<class Iter>
    struct model : concept
    {
        model(Iter iter) : _iter(iter) {}

        void next(int n) override { _iter = std::next(_iter, n); }
        const value_type& deref() const override { return *_iter; }
        bool equal(const void* rp) const override { return _iter == static_cast<const model*>(rp)->_iter; }
        std::unique_ptr<concept> clone() const override { return std::make_unique<model>(*this); }
        const std::type_info& type() const override { return typeid(_iter); }
        const void* address() const override { return this; }


        Iter _iter;
    };

    std::unique_ptr<concept> _impl;

public:
    // interface

    // todo: constrain Iter to be something that iterates value_type
    template<class Iter>
    poly_const_iterator(Iter iter) : _impl(std::make_unique<model<Iter>>(iter)) {};

    poly_const_iterator(const poly_const_iterator& r) : _impl(r._impl->clone()) {};

    const value_type& operator*() const {
        return _impl->deref();
    }

    poly_const_iterator& operator++() {
        _impl->next(1);
        return *this;
    }

    bool operator==(const poly_const_iterator& r) const {
        return _impl->type() == r._impl->type()
        and _impl->equal(r._impl->address());
    }

    bool operator != (const poly_const_iterator& r) const {
        return not(*this == r);
    }
};

void emit(poly_const_iterator from, poly_const_iterator to)
{
    std::copy(from, to, std::ostream_iterator<int>(std::cout, ", "));
    std::cout << std::endl;
}

int main()
{
    std::vector<int> v = { 1, 2, 3, 4, 5 };
    std::array<int, 5> a = { 6, 7,8, 9, 0 };

    emit(std::begin(v), std::end(v));
    emit(std::begin(a), std::end(a));


    return 0;
}
